import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react";
import TeamsBaseComponent, { ITeamsBaseComponentProps, ITeamsBaseComponentState } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * State for the aboutTab React component
 */
export interface IAboutTabState extends ITeamsBaseComponentState {

}

/**
 * Properties for the aboutTab React component
 */
export interface IAboutTabProps extends ITeamsBaseComponentProps {

}

/**
 * Implementation of the about content page
 */
export class AboutTab extends TeamsBaseComponent<IAboutTabProps, IAboutTabState> {

    public componentWillMount() {
        this.updateTheme(this.getQueryVariable("theme"));

        if (this.inTeams()) {
            microsoftTeams.initialize();
            microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
        }
    }

    /**
     * The render() method to create the UI of the tab
     */
    public render() {
        return (
            <Provider theme={this.state.theme}>
                <Flex fill={true} column styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Flex.Item>
                        <Header content="Welcome to the  bot page" />
                    </Flex.Item>
                    <Flex.Item>
                        <div>
                            <Text content="TODO: Add you content here" />
                        </div>
                    </Flex.Item>
                    <Flex.Item styles={{
                        padding: ".8rem 0 .8rem .5rem"
                    }}>
                        <Text size="smaller" content="(C) Copyright Wollongong SES" />
                    </Flex.Item>
                </Flex>
            </Provider>
        );
    }
}
