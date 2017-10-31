import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Text} from '../typography';
import V from '../variable';

const styles = StyleSheet.create({
    cellsTitle: {
        marginTop: V.cellTipsFontSize * 0.77 + (14 * V.baseLineHeight - 14) * 0.5,
        marginBottom: V.cellTipsFontSize * 0.3 + (14 * V.baseLineHeight - 14) * 0.5,
        paddingLeft: V.cellGapH,
        paddingRight: V.cellGapH,
        fontSize: V.cellTipsFontSize,
        color: V.descColor
    }
});
const CellsTitle = (props) => {
    const {children, style, ...others} = props;
    return <Text style={[styles.cellsTitle, style]} {...others}>{children}</Text>;
};
CellsTitle.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    others: PropTypes.object
};

export default CellsTitle;