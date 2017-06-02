import React, {PropTypes} from 'react';
import {View, Image, StyleSheet, ViewPropTypes} from 'react-native';
import {Text} from '../typography';
import V from '../variable';
import {IFont} from '../icon';

const styles = StyleSheet.create({
    cellFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    cellFooterText: {
        textAlign: 'center',
        color: V.descColor,
        fontSize: V.fontSize14
    },
    vcode: {
        width: 100,
        height: 44
    }
});

const CellFooter = (props) => {
    const {footerText, footerIconUri, onPress, footerStyle} = props;
    return (
        <View style={styles.cellFooter}>
            {footerText ? <Text style={[styles.cellFooterText, footerStyle]}>{footerText}</Text> : null}
            {footerIconUri ? <Image style={[styles.vcode, footerStyle]} source={{uri: footerIconUri}} /> : null}
            {
                onPress ?
                <IFont
                    name="angle-right"
                    size={V.fontSize14}
                    style={{marginLeft: 5, color: V.descColor, marginTop: 2}}
                /> : null
            }
        </View>
    );
};

CellFooter.propTypes = {
    footerText: PropTypes.string,
    footerIconUri: PropTypes.string,
    onPress: PropTypes.func,
    footerStyle: ViewPropTypes.style
};

export default CellFooter;
