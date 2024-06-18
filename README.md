# Twinkl Phonics Atomic Architecture
## Creator - Pearl Vernon-Howe
A place to experiment with a new atomic design structure for the Twinkl Phonics Application
All the directories in this repository will be within the src directory of the main Phonics project.

### How to use this repository
This repository is built to be used as a reference for the new atomic architecture. The directory structure should eventually match the main twinkl-phonics repo. Each directory has an .md file to describe the contents that should be in the directory

### Legacy directories that still need to be processed
styles: decide where general styling will live and how it will be written (emotion, css, sass)
hooks: create separate directories and ts files for each existing hook

### Atomisation Process Explained
Outline of  Atomic Design Pattern in React and why we should use it: https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97

The aim is to refactor our components from the top down i.e. starting with the largest components that make up entire pages and break them down into more managable components.
Each existing page in Phonics will be the highest level components e.g. Achievements, Avatar, Navigation pages and Games. The remainder of our existing components are used and reused across all of these pages. How we break down the components within them will be determined by their complexity i.e. how many other existing components/ elements are included, how much functionality is associated with it and how useful it would be to test it.

Look at the code for the page and page itself in the app. How is it divided up? What part are displayed? How complex are they? Would this part be considered a template or an organism?

#### Phonics Atomic Design Levels
-Pages: Pages are individual entities that render specific instances of templates that show what a UI looks like with real representative content in place. These templates may or may not be unique to the page being displayed. Pages may also contain organisms e.g. navigation bar, modals.
E.g. the Achievements page is made up of two types of templates: The level achievements sections and the general badges section. It is the component that will imported directly into the routing of the app.

-Templates: Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure. They usually consist of groups of organisms, representing a complete layout.
E.g. The level achievement section in the Achievements page is rendered many times but to display different data i.e. the pupil's achievements for each level. The UI and layout is the same, but the data displayed and maybe the styling is different.

-Organisms: Organisms are relatively complex UI components composed of groups of molecules and/or atoms. These are larger sections of an interface like a header, footer, or navigation bar and therefore can have their own state and functionality.
E.g. the badge items can be considered the organisms of the achievements page. They are made up of multiple different elements (progress bar with associated functionality, shape with associated functionality, text).

-Molecules: Molecules are groups of atoms that are combined together to form a functional unit. For example, a form might be a molecule that includes atoms like labels, input fields, and a submit button.
E.g. The progress bar is a component made up of one or two visual elements that has a singular function.

-Atoms: These are the basic building blocks of your application, like a button, an input field, or a form label. In React, these would be represented as individual components. They serve as foundational elements that are not exactly useful on their own but are fundamental for building more complex components.
E.g. The star icon

### Component Directory Contents
Every component directory, no matter what level, will contain the component itself, an index file to export the directory contents, an associated helpers file, styles file, stories file and test file.

#### Component File
imports **

const BasicAlert({ severity, message, backgroundColor, onClick }: BasicAlertProps) {
	return (
		<FadeInDiv
            backgroundColor={backgroundColor}
            onClick={onClick}
            data-testid='basic-alert'
        >
			<StyledAlert>
				<IconWrapper>{getIcon(severity)}</IconWrapper>
				{message}
			</StyledAlert>
		</FadeInDiv>
	);
}

export default BasicAlert;

#### Styles File
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// set type from component props or partial props
export const FadeInDiv = styled.div<Partial<BasicAlertProps>>(
	{
		display: 'flex',
		justifyContent: 'space-between',
	},
	({ backgroundColor }) => ({
		backgroundColor,
	}),
);

##### Helpers File
imports**

// declare component types
export interface BasicAlertProps {
    severity: "success" | "error" | "warning" | "info";
    message: string;
    backgroundColor: string;
    onClick: () => void;
}

// keep all functionality associated with this specific component
export const getIcon = (severity: string) => {
	switch (severity) {
		case 'success':
			return <CheckCircleIcon sx={{ marginRight: 1 }} />;
		case 'error':
			return <ErrorIcon sx={{ marginRight: 1 }} />;
		case 'warning':
			return <WarningIcon sx={{ marginRight: 1 }} />;
		case 'info':
			return <InfoIcon sx={{ marginRight: 1 }} />;
		default:
			return null;
	}
};

#### Stories File
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import BasicAlert from './BasicAlert';

// creates location in storybook UI and sets unique type of the component itself
const meta: Meta<typeof BasicAlert> = {
	title: 'Atoms/BasicAlert',
	tags: ['autodocs'],
	component: BasicAlert,
};

export default meta;

// set type of component as story object based on the component itself
type Alert = StoryObj<typeof BasicAlert>;

// create story with desired parameters to test
export const Default: Alert = {
	name: 'default',
	args: {
		severity: 'success',
        message: 'This was a success!',
        backgroundColor: '#FFFFFF',
        onClick: () => fn(), // storybook's built in dummy function
	},
};

#### Tests File
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from 'Molecules';

import BasicAlert from './BasicAlert';

describe('<BasicAlert />', () => {
	test('Renders without crashing & click handled', () => {
		const onClick = vi.fn();
		render(
			<BasicAlert
				severity='success'
                message='This was a success!'
                backgroundColor='#FFFFFF'
                onClick={onClick}
			/>,
		);
		const alert = screen.getByTestId('basic-alert');
		expect(alert).toBeInTheDocument();

		fireEvent.click(alert);
		expect(onClick).toHaveBeenCalledOnce();
	});
});

#### index.ts
import BasicAlert from './BasicAlert';

export default BasicAlert;

