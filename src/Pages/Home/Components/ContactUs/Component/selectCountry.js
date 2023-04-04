import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const SelectCountry = () => {
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch spinner
                setCountryState({
                    ...countryState,
                    loading: true,
                });

                //  fetch data
                const dataUrl = `https://restcountries.com/v3.1/all`;
                const response = await axios.get(dataUrl);
                setCountryState({
                    ...countryState,
                    countries: response.data,
                    loading: false,
                });
            } catch (error) {
                setCountryState({
                    ...countryState,
                    loading: false,
                    errorMessage: "Sorry Something went wrong",
                });
            }
        };

        fetchData();
    }, []);
    const {countries } = countryState;
    console.log("countries", countries);

    const [selectedCountry, setSelectedCountry] = useState();
    console.log("selectedCountry", selectedCountry);

    return (
            <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className=" w-[250px] h-9 text-[#888888] text-lg rounded border border-[#888888] "
            >
                <option>--Select Country--</option>
                {countries.map((item) => {
                    return (
                        <option key={uuidv4()} value={item.name.common}>
                            {item.name.common}
                        </option>
                    );
                })}
            </select>
    )
}

export default SelectCountry