import React, { useState, useEffect } from 'react'
import { View, Text, Animated } from 'react-native'

export default function ShipperArticles({ count }) {
    const [animation] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.loop(
            Animated.timing(animation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start()
    }, [])
    const skeletons = Array.from({ length: count }, (_, i) => i)

    const opacity = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.5, 1, 0.5],
    })
    return (
        <View style={{ padding: 10 }}>
            {skeletons.map((_, i) => (
                <View key={i}>
                    <Animated.View
                        style={{
                            padding: 10,
                            marginBottom: 5,
			    marginTop:5,
                            backgroundColor: '#f2f2f2',
                            opacity,
                        }}
                    >
                        <Text
                            style={{
                                backgroundColor: '#ddd',
                                width: '50%',
                                height: 20,
                                marginBottom: 5,
                            }}
                        />
                        <Text
                            style={{
                                backgroundColor: '#ddd',
                                width: '80%',
                                height: 20,
                                marginBottom: 5,
                            }}
                        />
                        <Text
                            style={{
                                backgroundColor: '#ddd',
                                width: '60%',
                                height: 20,
                                marginBottom: 5,
                            }}
                        />
                    </Animated.View>
                    <Animated.View
                        style={{
                            padding: 10,
                            marginBottom: 5,
			    marginTop:5,
                            backgroundColor: '#f2f2f2',
                            opacity,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#ddd',
                                width: '100%',
                                height: 10,
                                marginBottom: 5,
				marginTop:5,
                            }}
                        />
                    </Animated.View>
                </View>
            ))}
        </View>
    )
}
