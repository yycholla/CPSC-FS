"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
class Character {
  constructor(name, hitPoints, armorClass) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.armorClass = armorClass;
    this.maxHitPoints = hitPoints;
  }
  takeDamage(damage) {
    this.hitPoints = damage >= this.hitPoints ? 0 : this.hitPoints - damage;
  }
  takePotion(healing) {
    this.hitPoints = Math.min(healing + this.hitPoints, this.maxHitPoints);
  }
}
const characters = [new Character("Vargus", 17, 13), new Character("Ezmerelda", 23, 17), new Character("Conan", 50, 15)];
class PartyList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.party);
    return /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, this.props.party.map((member, i) => /*#__PURE__*/React.createElement(PartyMember, _extends({}, member, {
      key: i
    }))));
  }
}
class PartyMember extends React.Component {
  constructor(props) {
    super(props);
    this.hitPoints = this.props.hitPoints;
    this.name = this.props.name;
  }
  nameColor() {
    return this.hitPoints > this.props.hitPoints / 2 ? "text-white" : this.hitPoints > 0 ? "text-warning" : "text-danger";
  }
  render() {
    /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, /*#__PURE__*/React.createElement("figure", {
      className: "figure my-2"
    }, /*#__PURE__*/React.createElement("img", {
      className: "figure-img img-fluid rounded-top-pill",
      src: `images/${this.props.name.toLowerCase()}.png`
    }), console.log(this.props.name), /*#__PURE__*/React.createElement("figcaption", {
      className: "figure-caption row"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      className: `${this.nameColor()} fs-4 btn`
    }, this.props.name), /*#__PURE__*/React.createElement("div", {
      id: `${this.props.name}Data`,
      className: "collapse bg-white rounded-pill text-center fs-6",
      "data-bs-toggle": "collapse",
      "data-bs-target": `#${this.props.name.data}`
    }, /*#__PURE__*/React.createElement("i", null, "Hit Points: ", this.hitPoints), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Armor Class: ", this.props.armorClass), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-danger btn-sm",
      onClick: () => {
        this.hitPoints = this.hitPoints < 7 ? 0 : this.hitPoints - 7;
        this.setState({});
      }
    }, "Attack Me!")))));
  }
}
(function start() {
  const topElement = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "img-fluid",
    src: "images/road_to_adventure.png"
  }), /*#__PURE__*/React.createElement(PartyList, {
    party: [...characters]
  }));
  const root = ReactDOM.createRoot(document.getElementById("main"));
  root.render(topElement);
})();
