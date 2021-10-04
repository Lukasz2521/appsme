import * as React from "react";

import { Button } from "@components/inputs";

const UI = () => {
    return (
        <div>
            <header>
                <h2>Buttons</h2>
            </header>
            <div>
                <Button type="primary">Dowiedz się więcej</Button>
            </div>
            <div>
                <Button type="outlined">Porozmawiajmy o projekcie</Button>
            </div>
        </div>
    );
}

export default UI;