/**
 * Created by rachitabansal on 9/20/16.
 */
import React, {Component}  from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SelectField from 'material-ui/lib/select-field';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
const styles = {
    customWidth: {
        width: 200,
    },
};
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {value: null};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        console.log(this.state.value);

        return (

            <SelectField
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.customWidth}
                autoWidth={false}
                maxHeight={200}
                floatingLabelText="options"
            >
                <MenuItem value={1} primaryText="Custom width"/>
                <MenuItem value={2} primaryText="Every Night"/>
                <MenuItem value={3} primaryText="Weeknights"/>
                <MenuItem value={4} primaryText="Weekends"/>
                <MenuItem value={5} primaryText="Weekly"/>
                <MenuItem value={1} primaryText="Custom width"/>
                <MenuItem value={2} primaryText="Every Night"/>
                <MenuItem value={3} primaryText="Weeknights"/>
                <MenuItem value={4} primaryText="Weekends"/>
                <MenuItem value={5} primaryText="Weekly"/>
            </SelectField>

        );
    }
}

export default Dropdown;