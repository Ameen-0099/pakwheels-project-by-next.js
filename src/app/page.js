"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const Hero_1 = __importDefault(require("./hero-sec/Hero"));
function Home() {
    return (<div>
      <Hero_1.default />
    </div>);
}
