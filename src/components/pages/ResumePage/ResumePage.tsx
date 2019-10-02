
import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

import styled from "styled-components";

interface IResumePageProps {
}

@observer
class Resume extends React.Component<IResumePageProps> {

	constructor(props: any) {
		super(props);

	}

	render(): React.ReactNode {

		return (
			<div>
				Resumé
			</div>
		);
	}

}

export default Resume;