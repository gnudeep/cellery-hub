/*
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Container from "@material-ui/core/Container";
import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import * as PropTypes from "prop-types";

const styles = () => ({
    root: {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column"
    },
    mainContent: {
        flex: 1
    }
});

const AppLayout = (props) => {
    const {classes, children} = props;

    return (
        <div className={classes.root}>
            <Header/>
            <main className={classes.mainContent}>
                <Container maxWidth="md">
                    {children}
                </Container>
            </main>
            <Footer/>
        </div>
    );
};

AppLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired
};

export default withStyles(styles)(AppLayout);

