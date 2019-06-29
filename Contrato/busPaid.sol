pragma solidity ^0.4.25;


/**
 * Contrato de BusPaid
 * author: BusPaid
 * version: 28/06/2019
 */



contract BusPaid {


    struct users {
        uint256 uuid;
        string firstname;
        string lastname;
        string email;
        string password;
        string telefono;
        uint256 date;
        bool status;
    }


    struct logins {
        uint256 uuid;
        uint256 date;
    }

    struct balances {
        uint256 uuid;
        uint256 transport;
        uint256 point;
        uint256 token;
        uint256 date;
    }


    struct transactions_transport {
        uint256 uuid;
        uint256 amount;
        string bus;
        uint256 date;
    }

    struct transactions_points {
        uint256 uuid;
        uint256 amount;
        uint256 points;
        string place;
        uint256 date;
    }

    struct transactions_token {
        uint256 uuid;
        uint256 amount;
        uint256 receiver;
        uint256 date;
    }


    address public owner;
    address public API;
    mapping ( uint256 => users ) public Users;
    mapping ( uint256 => logins ) public Logins;
    mapping ( uint256 => balances ) public Balances;
    mapping ( uint256 => transactions_transport ) public TransactionsTransport;
    mapping ( uint256 => transactions_points ) public TransactionsPoints;
    mapping ( uint256 => transactions_token ) public TransactionsToken;



    modifier onlyOwner {
        require(owner == msg.sender);
        _;
    }

    modifier onlyAPI {
        require(API == msg.sender);
        _;
    }


	constructor() public{
		owner = msg.sender;
	}


    function setAPI(address _API) onlyOwner public returns (bool success){
        API = _API;
        return true;
    }




    function setUsers(uint256 _uuid , string _firstname , string _lastname , string _email , string _password , string _telefono , bool _status) onlyAPI public returns (bool success){
        Users[_uuid].uuid = _uuid;
        Users[_uuid].firstname = _firstname;
        Users[_uuid].lastname = _lastname;
        Users[_uuid].email = _email;
        Users[_uuid].password = _password;
        Users[_uuid].telefono = _telefono;
        Users[_uuid].date = now;
        Users[_uuid].status = _status;
        Balances[_uuid].uuid = _uuid;
        Balances[_uuid].transport = 0;
        Balances[_uuid].point = 0;
        Balances[_uuid].token = 0;
        Balances[_uuid].date = now;
        emit logSetUsers(_uuid , now , _email , _firstname , _lastname);
        return true;
    }




    function setLogins(uint256 _uuid) onlyAPI public returns (bool success){
        Logins[_uuid].uuid = _uuid;
        Logins[_uuid].date = now;
        emit logSetLogins(_uuid , now);
        return true;
    }


    function setTransactionsTransport(uint256 _uuid , uint256 _amount , string _bus) onlyAPI public returns (bool success){
        TransactionsTransport[_uuid].uuid = _uuid;
        TransactionsTransport[_uuid].amount = _amount;
        TransactionsTransport[_uuid].bus = _bus;
        TransactionsTransport[_uuid].date = now;
        emit logSetTransactionsTransport(_uuid , now , _amount , _bus);
        return true;
    }


    function setTransactionsPoints(uint256 _uuid , uint256 _amount , uint256 _points , string _place) onlyAPI public returns (bool success){
        TransactionsPoints[_uuid].uuid = _uuid;
        TransactionsPoints[_uuid].amount = _amount;
        TransactionsPoints[_uuid].points = _points;
        TransactionsPoints[_uuid].place = _place;
        TransactionsPoints[_uuid].date = now;
        emit logSetTransactionsPoints(_uuid , now , _amount , _points , _place);
        return true;
    }


    function setTransactionsToken(uint256 _uuid , uint256 _amount , uint256 _receiver) onlyAPI public returns (bool success){
        require(Balances[_uuid].token >= _amount);
        require(Balances[_receiver].token + _amount >= Balances[_receiver].token);
        Balances[_receiver].token += _amount;
        Balances[_uuid].token -= _amount;
        TransactionsToken[_uuid].uuid = _uuid;
        TransactionsToken[_uuid].amount = _amount;
        TransactionsToken[_uuid].receiver = _receiver;
        TransactionsToken[_uuid].date = now;
        emit logSetTransactionsToken(_uuid , now , _amount , _receiver);
        return true;
    }


    function setAmountToken(uint256 _uuid , uint256 _amount , string _motivo) onlyAPI public returns (bool success){
        Balances[_uuid].token += _amount;
        emit logSetAmountToken(_uuid , now , _amount , _motivo);
    }

    function setAmountTransport(uint256 _uuid , uint256 _amount , string _motivo) onlyAPI public returns (bool success){
        Balances[_uuid].transport += _amount;
        emit logSetAmountTransport(_uuid , now , _amount , _motivo);
    }

    function setAmountPoints(uint256 _uuid , uint256 _amount , string _motivo) onlyAPI public returns (bool success){
        Balances[_uuid].point += _amount;
        emit logSetAmountPoints(_uuid , now , _amount , _motivo);
    }


	event logSetUsers(uint256 indexed _uuid, uint256 indexed _date, string _email, string _firstname, string _lastname);
    event logSetLogins(uint256 indexed _uuid, uint256 indexed _date);
    event logSetTransactionsTransport(uint256 indexed _uuid, uint256 indexed _date, uint256 _amount, string _bus);
    event logSetTransactionsPoints(uint256 indexed _uuid, uint256 indexed _date, uint256 _amount, uint256 _points, string _place);
    event logSetTransactionsToken(uint256 indexed _uuid, uint256 indexed _date, uint256 _amount, uint256 _receiver);
    event logSetAmountToken(uint256 indexed _uuid, uint256 indexed _date, uint256 _amount, string _motivo);
    event logSetAmountTransport(uint256 indexed _uuid, uint256 indexed _date, uint256 _amount, string _motivo);
    event logSetAmountPoints(uint256 indexed _uuid, uint256 indexed _date, uint256 _amount, string _motivo);
 

}