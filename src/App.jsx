import { useState } from "react";
import feed from "cifar";

function App() {
    const [string, setString] = useState("");
    const [shift, setShift] = useState("");
    const [cipher, setCipher] = useState("");
    const [alert, setAlert] = useState("");
    const [info, setInfo] = useState("");
    const [alertDisplay, setAlertDisplay] = useState("hidden");
    const [infoDisplay, setInfoDisplay] = useState("");
    const [cipherDisplay, setCipherDisplay] = useState("hidden");
    const shiftOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    const handleString = (e) => {
        setString(e.target.value);
    };

    const handleShift = (e) => {
        setShift(e.target.value);
    };

    const generatePhrase = () => {
        try {
            if (string.length === 0) {
                setAlert("You must enter string.");
                setAlertDisplay("block");
                setCipherDisplay("hidden");
            } else if (shift.length === 0) {
                setAlert("You must select shift.");
                setAlertDisplay("block");
                setCipherDisplay("hidden");
            } else {
                let chunk = feed(string, parseInt(shift));
                setAlertDisplay("hidden");
                setCipherDisplay("block");
                setCipher(chunk);
            }
            setInfoDisplay("hidden");
        } catch (err) {
            setCipher("Who know who's mistake is this.");
        }
    };

    const copyToClipboard = () => {
        const copyText = document.getElementById("cipher");

        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        document.execCommand("copy");

        setInfo("Copied to clipboard.");
        setInfoDisplay("block");
    };

    const shiftMenu = shiftOptions.map((item) => (
        <option key={item} value={item}>
            {item}
        </option>
    ));

    return (
        <div className="max-w-6xl mx-auto">
            <header className="mt-6">
                <div className="">
                    <h1 className="text-4xl text-gray-800 tracking-widest cursor-default my-10">
                        Cifar
                    </h1>
                </div>
            </header>

            <div className="grid grid-cols-2 bg-gray-100 mt-6 h-96">
                <div className="space-y-6 self-center mx-auto">
                    <p className={`text-center text-red-600 ${alertDisplay}`}>
                        {alert}
                    </p>
                    <p
                        className={`${infoDisplay} text-center pr-10 text-gray-900 opacity-50 pl-3 text-xs`}
                    >
                        {info}
                    </p>
                    <div className={`${cipherDisplay}  flex justify-center`}>
                        <input
                            id="cipher"
                            className={`text-center inline h-10 text-gray-900 px-3 py-2 text-lg border border-indigo-300 focus:outline-none`}
                            value={cipher}
                            readOnly
                        />

                        <button
                            className="h-13 bg-gray-200 ml-1 text-md px-3 py-2 inline focus:outline-none focus:ring-2 focus:ring-indigo-300 active:bg-gray-400 hover:bg-green-50"
                            onClick={copyToClipboard}
                        >
                            &#x1f4cb;
                        </button>
                    </div>

                    <input
                        type="text"
                        onChange={handleString}
                        value={string}
                        placeholder="Enter string"
                        className="w-80 h-13 text-gray-900 px-3 py-2 text-lg brdr focusOv"
                    />
                    <br />

                    <select
                        name="shift"
                        className="w-15 px-3 py-2 brdr focusOv"
                        onChange={handleShift}
                    >
                        <option value="" disabled selected></option>
                        {shiftMenu}
                    </select>
                    <label
                        for="shift"
                        className="pr-10 text-gray-900 opacity-50 pl-3 text-xs"
                    >
                        (Characters to shift)
                    </label>

                    <br />
                    <input
                        type="button"
                        value="Generate"
                        onClick={generatePhrase}
                        className="px-5 py-2 bg-indigo-500 text-white rounded-sm uppercase cursor-pointer text-sm tracking-widest hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                </div>
                <div className="">
                    {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti, maxime.
                    </p> */}
                </div>
            </div>

            {/* <a href="https://www.npmjs.com/package/cifar" target="blank">
                <svg viewBox="0 0 27.23 27.23" className="h-5 w-5">
                    <rect
                        fill="#333333"
                        width="27.23"
                        height="27.23"
                        rx="2"
                    ></rect>
                    <polygon
                        fill="#fff"
                        points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
                    ></polygon>
                </svg>
            </a>
            ; */}
        </div>
    );
}

export default App;
