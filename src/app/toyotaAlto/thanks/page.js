"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = __importDefault(require("next/image"));
const altothanks = () => {
    return (<div>
      <div className="img h-auto">
        <image_1.default src="/thank-yoy.PNG" alt="" className="w-full h-full" width={500} height={500}/>
      </div>
    </div>);
};
exports.default = altothanks;
