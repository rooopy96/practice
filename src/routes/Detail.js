import React from "react";

class Detail extends React.Component {
	componentDidMount() {
		console.log(this.props)
		const {
			location, history
		} = this.props

		if(location.state === undefined) {
			history.push("/")
		}
	}

	render() {
		const {	location } = this.props;
		if(location.state) {
			return (
				<div>
					<div>{location.state.title}</div>
				</div>
			)
		} else {
			return null
		}		
	}
}

export default Detail;