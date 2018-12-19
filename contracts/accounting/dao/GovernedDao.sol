pragma experimental ABIEncoderV2;

import "contracts/interfaces/IAgentManagement.sol";

contract GovernedDao {

  enum FUNDRAISING {BOND, COIN}

  struct BaseProposal {

    // A plain text description of the proposal
    string descriptionOnIpfs;
    // A unix timestamp, denoting the end of the voting period
    uint votingDeadline;
    // Number of bots in favor of the proposal
    uint yea;
    // Number of bots opposed to the proposal
    uint nay;
    // Address of the shareholder who created the proposal
    address creator;

  }

  struct NewMember {

    //Base proposal data
    BaseProposal proposal;

    // True if this proposal is to include a new bot, false if it is to include a human
    bool botOrHuman;
    // Address of member to be added
    address memberAddress;

  }

  struct Aquisition {

    BaseProposal proposal;

    address daoAddress;

  }

  struct Fundraise {

    BaseProposal proposal;

    uint256 fundraisingType;

  }

  uint256 loopLimit = 20;

  IAgentManagement agentManagement;

  mapping(uint256 => bool) passedProposals;

  mapping(string => bool) agents;

  mapping(address => bool) humans;

  constructor(uint256 _loopLimit, address _agentManagement, string[] _agents, address[] _humans) {

    require(_agentManagement != address(0));

    agentManagement = IAgentManagement(_agentManagement);

    if (_loopLimit >= 1)
      loopLimit = _loopLimit;

    if (_agents.length == 0 && _humans.length == 0) {



    }

    if (_agents.length > 0) require(checkNewAgentsLegitimacy(_agents) == true);
    if (_humans.length > 0) require(checkNewHumansLegitimacy(_humans) == true);

    if (_agents.length > 0) addAgentMembers(_agents);
    if (_humans.length > 0) addHumanMembers(_humans);

  }

  //PRIVATE

  function addMember(address member) private {

    

  }

  function addAgentMembers(string[] _agents) private {

    require(_agents.length > 0);

    for (uint i = 0; i < _agents.length; i++) {

      agents[_agents[i]] = true;

    }

  }

  function addHumanMembers(address[] _humans) private {

    require(_humans.length > 0);

    for (uint i = 0; i < _humans.length; i++) {

      humans[_humans[i]] = true;

    }

  }

  function kickAgents(string[] _agents) private {

    require(_agents.length > 0);

    for (uint i = 0; i < _agents.length; i++) {

      agents[_agents[i]] = false;

    }

  }

  function kickHumans(address[] _humans) private {

    require(_humans.length > 0);

    for (uint i = 0; i < _humans.length; i++) {

      humans[_humans[i]] = false;

    }

  }

  function checkNewAgentsLegitimacy(string[] _agents) private view returns (bool) {

    return true;

  }

  function checkNewHumansLegitimacy(address[] _humans) private view returns (bool) {

    return true;

  }

  function isLegitAgent(string name) private view returns (bool) {

    if (agents[name] == true) return false;

    address agentCreator = agentManagement.getCreatorFromName(name);
    uint256 position = agentManagement.getPositionFromName(name);

    //TODO

  //  if (agentManagement.getAutonomyAddress(agentCreator, position) == false)
    //  return false;

    //CHECK if address of caller is a host who has the bot

    return true;

  }

  function isLegitHuman(address human) private view returns (bool) {

    if (humans[human] == true) return false;

    return true;

  }

}
