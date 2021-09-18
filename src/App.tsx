import React from 'react';
import './global.scss'
import {hot} from "react-hot-loader/root";
import { Header } from "./shared/Header";
import {Content} from "./shared/Content";
import {Layout} from "./shared/Layout";
import {InstructionList} from "./shared/InstructionList";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <InstructionList />
            </Content>
        </Layout>
    )
}

export const App = hot(() => <AppComponent/>);