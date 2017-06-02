import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
    LazyScrollView,
    LazyImage
} from '../../src/index';
import _ from 'underscore';

const shucaiImage = require('../../images/shucai.jpg');

const defaultImage = {
    uri: 'https://bshop.guanmai.cn/static/build/bshop/img/product-default-gm.f9db3524.jpg'
};

class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Lazyload'
    };

    render() {
        return (
            <ScrollView>
                <View>
                    <Text>为了网络考虑，延迟加载图片资源。至于出现在屏幕范围内的图片才显示。</Text>
                </View>
                <LazyScrollView
                    style={{flex: 1}}
                    name="lazyScroll"
                >
                    {_.map(_.range(10), v => (
                        <LazyImage
                            key={v}
                            style={{
                                width: 200,
                                height: 200
                            }}
                            resizeMode="contain"
                            lazyScrollViewName="lazyScroll"
                            source={shucaiImage}
                            placeholder={defaultImage}
                        />
                    ))}
                </LazyScrollView>
            </ScrollView>
        );
    }
}

export default Component;