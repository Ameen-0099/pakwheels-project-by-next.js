"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const local_1 = __importDefault(require("next/font/local"));
require("./globals.css");
const Navbar_1 = __importDefault(require("./component/Navbar"));
const Foot_1 = __importDefault(require("./footer/Foot"));
const geistSans = (0, local_1.default)({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = (0, local_1.default)({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
exports.metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar_1.default />
        {children}
        <Foot_1.default />
      </body>
    </html>);
}
