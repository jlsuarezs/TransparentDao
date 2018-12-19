pragma solidity 0.4.24;

contract IAgentManagement {

    event CreatedNewAgent(address creator, uint256 positionInArray);

    event MadeAutonomous(address creator, uint256 position);

    event UpdatedCode(address caller, address creator, uint256 position, string codeLocation, string codeHash);

    event ChangedAgentContract(address caller, address creator, uint256 position, address newContract);

    event ChangedShardSize(uint256 newSize);


    function setEphemeral(address _ephemeral) public;

    function changeMinimumShardSize(uint256 newShardSize) public;

    function newAgent(bool agentIsCreator, string _agent, string _name,
        string open_source, string code_hash,
        uint256 creatorEarnings, uint256 execution_interval) public;

    function makeFullyAutonomous(string _name) public;

    function updateCode(string _name, string codeSource, string codeHash) public;


    function getAgentControllingAgent(string _controlledAgent) public view returns (string);

    function getCreatorIsAgent(address creator, uint256 position) public view returns (bool);

    function getMinimumShardSize() public view returns (uint256);

    function getAgentName(address creator, uint256 position) public view returns (string);

    function getAgentVersion(address creator, uint256 position) public view returns (uint256);

    function getCreatorFromName(string name) public view returns (address);

    function getPositionFromName(string name) public view returns (uint256);

    function setTreasury(address _treasury) public;

    function getAgentSourceLocation(address creator, uint256 position) public view returns (string);

    function getAgentCodeHash(address creator, uint256 position) public view returns (string);

    function getAgentAutonomy(address creator, uint256 position) public view returns (bool);

    function getAgentCreatorEarnings(address creator, uint256 position) public view returns (uint256);

    function getAgentExecutionInterval(address creator, uint256 position) public view returns (uint256);

    function isNameTaken(string _name) public view returns (bool);

}
