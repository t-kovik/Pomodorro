import React from 'react';
import './global.scss'
import {hot} from "react-hot-loader/root";
import { Header } from "./shared/Header";
import {Content} from "./shared/Content";
import {Layout} from "./shared/Layout";
import {Tomato} from "./shared/Tomato";
import {TasksBoard} from "./shared/TasksBoard";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
    return (
        <Provider store={store}>
            <Layout>
                <Header />
                <Content>
                    <TasksBoard />
                    <Tomato />
                </Content>
            </Layout>
        </Provider>
    )
}

export const App = hot(() => <AppComponent/>);