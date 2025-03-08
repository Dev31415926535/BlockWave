// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SupplyChain is ERC721, Ownable {
    struct Product {
        uint256 id;
        string name;
        string manufacturer;
        string location;
        string status;
        uint256 timestamp;
    }

    uint256 public productCounter;
    mapping(uint256 => Product) public products;

    constructor() ERC721("SupplyChainProduct", "SCP") Ownable() {}

    function createProduct(
        string memory _name,
        string memory _manufacturer,
        string memory _location
    ) public onlyOwner {
        productCounter++;
        products[productCounter] = Product({
            id: productCounter,
            name: _name,
            manufacturer: _manufacturer,
            location: _location,
            status: "Manufactured",
            timestamp: block.timestamp
        });

        _mint(msg.sender, productCounter);
    }

    function updateProductStatus(
        uint256 _productId,
        string memory _status,
        string memory _location
    ) public onlyOwner {
        require(products[_productId].id != 0, "Product does not exist");
        products[_productId].status = _status;
        products[_productId].location = _location;
        products[_productId].timestamp = block.timestamp;
    }

    function getProduct(uint256 _productId)
        public
        view
        returns (Product memory)
    {
        require(products[_productId].id != 0, "Product does not exist");
        return products[_productId];
    }
}
