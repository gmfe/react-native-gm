import React from 'react';
import {ScrollView} from 'react-native';
import {
    Styles as S,
    Button,
    Toast
} from '../../src/index';

class ToastScreen extends React.Component {
    render() {
        return (
            <ScrollView style={S.padding10}>
                <Button
                    type="primary"
                    style={S.marginTop10}
                    onPress={() => Toast.loading()}
                >
                    toast loading
                </Button>

                <Button
                    type="primary"
                    style={S.marginTop10}
                    onPress={() => {
                        Toast.loading({
                            time: false // or 0
                        });
                        setTimeout(() => {
                            Toast.clear();
                        }, 5000);
                    }}
                >
                    toast loading 设置time 5s关闭
                </Button>

                <Button
                    type="default"
                    style={S.marginTop10}
                    onPress={() => Toast.tip('纯文字')}
                >
                    toast 纯文字
                </Button>

                <Button
                    type="primary"
                    style={S.marginTop10}
                    onPress={() => Toast.success('成功')}
                >
                    toast success
                </Button>

                <Button
                    type="default"
                    style={S.marginTop10}
                    onPress={() => Toast.info('提示')}
                >
                    toast info
                </Button>

                <Button
                    type="warn"
                    style={S.marginTop10}
                    onPress={() => Toast.warning('警告')}
                >
                    toast warning
                </Button>

                <Button
                    type="warn"
                    style={S.marginTop10}
                    onPress={() => Toast.danger('危险')}
                >
                    toast danger
                </Button>
            </ScrollView>
        );
    }
}

export default ToastScreen;