// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract BasicBuiltins {
    uint8 public _uintEight;
    uint256 public _uintTwoFiveSix;

    string public _stringText;

    uint8 public _uintEightArrayLength;
    uint8[] public _uintEightArray;

    uint256 public _uintTwoFiveSixArrayLength;
    uint256[] public _uintTwoFiveSixArray;

    uint8 public _stringArrayLength;
    string[] public _stringArray;

    address owner;
    address public _address;

    constructor() {
        owner = msg.sender;
    }

    function set_uintEight(uint8 _arg) public {
        _uintEight = _arg;
    }

    function set_uintTwoFiveSix(uint256 _arg) public {
        _uintTwoFiveSix = _arg;
    }

    function set_stringText(string memory _arg) public {
        _stringText = _arg;
    }

    function update_uintEightArray(uint8 _arg) public {
        _uintEightArray.push(_arg);
        ++_uintEightArrayLength;
    }

    function update_uintTwoFiveSixArray(uint256 _arg) public {
        _uintTwoFiveSixArray.push(_arg);
        ++_uintTwoFiveSixArrayLength;
    }

    function set_stringArray(string memory _arg) public {
        _stringArray.push(_arg);
        ++_stringArrayLength;
    }

    function set_address() public {
        _address = msg.sender;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}

contract IntermediateBuiltins {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    struct Person {
        string _firstName;
        string _lastName;
        uint8 _age;
        uint8 _id;
    }

    event PersonCreated(
        string _firstName,
        string _lastName,
        uint8 _age,
        uint8 _id
    );

    event PersonUpdated(uint8 _id);

    // mapping string to Person
    mapping(uint8 => Person) public mapStringPerson;

    // array of persons
    uint8 public personsLength;
    Person[] public persons;

    function createPerson(
        string memory _firstName,
        string memory _lastName,
        uint8 _age
    ) public {
        Person memory _newPerson;
        _newPerson = Person(_firstName, _lastName, _age, personsLength);

        // map `_id` to `_newPerson` in `mapStringPerson` mapping variable
        mapStringPerson[personsLength] = _newPerson;

        // add newly created person struct to persons array
        persons.push(_newPerson);

        // emit PersonCreated event
        emit PersonCreated(_firstName, _lastName, _age, personsLength);

        // increment personsLength
        ++personsLength;
    }

    function updatePerson(
        string memory _firstName,
        string memory _lastName,
        uint8 _age,
        uint8 _id
    ) public {
        // check if provided _id is less than personsLength
        require(
            _id < personsLength,
            "Provided 'id' exceeds the amount of data stored"
        );

        Person memory _person;
        _person = mapStringPerson[_id];

        // check if person exists
        require(_id == _person._id, "Provided _id was not found");

        // update person in `mapStringPerson` variable
        _person = Person(_firstName, _lastName, _age, _id);
        mapStringPerson[_id] = _person;

        // update person in `persons` array
        persons[_id] = _person;

        // emit PersonUpdated event
        emit PersonUpdated(_id);
    }
}
