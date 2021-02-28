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
            <header className="mt-4">
                <div className="">
                    <h1 className="md:text-4xl text-2xl text-center font-semibold text-gray-800 tracking-widest cursor-default md:my-7">
                        Cifar
                    </h1>
                </div>
            </header>

            <div className="md:grid md:grid-cols-2 bg-gray-100 md:mt-5 h-auto xl:mt-12">
                <div className="md:space-y-6 space-y-10 self-center mx-auto px-5">
                    <p
                        className={`text-center pt-1 text-sm md:text-base text-red-600 ${alertDisplay}`}
                    >
                        {alert}
                    </p>
                    <p
                        className={`${infoDisplay} pt-1 text-center md:pr-10 text-gray-900 opacity-50 md:pl-3 text-xs`}
                    >
                        {info}
                    </p>
                    <div className={`${cipherDisplay}  flex justify-center`}>
                        <input
                            id="cipher"
                            className={`text-center inline h-10 text-gray-900 md:px-2 md:py-2 md:text-lg border border-indigo-300 focus:outline-none`}
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
                        className="md:w-80 w-full h-13 text-gray-900 px-3 py-2 md:text-lg brdr focusOv"
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
                        className="px-5 py-2 font-semibold bg-indigo-500 text-white rounded-sm uppercase cursor-pointer text-xs md:text-sm tracking-widest hover:bg-indigo-400 active:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />
                </div>
                <hr className="md:hidden mt-10 opacity-25 border-b border-indigo-400" />
                <div className="px-4 py-10 cursor-default">
                    <div className="md:prose prose-sm">
                        <h1 className="font-semibold">
                            <span className="text-indigo-600">Encryption</span>{" "}
                            as a&nbsp;
                            <span className="text-gray-700 ">
                                Password Manager
                            </span>
                        </h1>

                        <p className="text-gray-900 opacity-95">
                            You can use the dumbest and remember able words to
                            generate secret words(could be your passwords). Not
                            an encryption algorithm though a little modification
                            of Caesar Cipher(perhaps a stupid one).
                        </p>

                        <p className="text-gray-900 opacity-60">
                            However, this may or may not (higher chances) solve
                            the password remembering issue. So, the implication
                            of 'Password Manager' is not literal.
                        </p>
                    </div>

                    <br />
                    <br />

                    <p>
                        <a
                            href="https://iamlizu.com/blog/encryption-as-a-password-manager/"
                            className="px-5 py-2 font-semibold bg-gray-300 text-gray-900 rounded-sm uppercase cursor-pointer md:text-sm text-xs tracking-widest hover:bg-gray-400 active:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            Lean more
                        </a>
                    </p>
                </div>
            </div>

            <div className="md:mt-10 x:mt-16 px-3 pb-9 md:flex md:justify-between">
                <p className="">
                    <a
                        className="font-medium text-xs md:text-base"
                        href="https://github.com/IamLizu/cifar-web"
                    >
                        GitHub
                    </a>
                    &nbsp;/&nbsp;
                    <a
                        className="font-medium  text-xs md:text-base "
                        href="https://www.npmjs.com/package/cifar"
                    >
                        NPM Package Registry
                    </a>
                </p>
                <p className="text-xs md:text-base ">
                    Made with 💙 by{" "}
                    <a className="font-mono " href="http://smmahmudulhasan.com">
                        S M Mahmudul Hasan
                    </a>
                </p>
            </div>
        </div>
    );
}

export default App;
