// import { View, Text } from 'react-native'
// import React from 'react'
// import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
// import LinearGradient from 'react-native-linear-gradient';

// const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

// export default function Shimmer() {
// 	const avatarRef = React.createRef()
// 	const firstLineRef = React.createRef()
// 	const secondLineRef = React.createRef()
// 	const thirdLineRef = React.createRef()

// 	React.useEffect(() => {
// 		const facebookAnimated = Animated.stagger(
// 		  400,
// 		  [
// 		    avatarRef.current.getAnimated(),
// 		    Animated.parallel([
// 		      firstLineRef.current.getAnimated(),
// 		      secondLineRef.current.getAnimated(),
// 		      thirdLineRef.current.getAnimated()
// 		    ])
// 		  ]
// 		);
// 		Animated.loop(facebookAnimated).start();
// 	      }, [])
//   return (
//    <View>
//       <View style={{ flexDirection: "row" }}>
//         <ShimmerPlaceholder
//           ref={avatarRef}
//           stopAutoRun
//         />
//         <View style={{ justifyContent: "space-between" }}>
//           <ShimmerPlaceholder
//             ref={firstLineRef}
//             stopAutoRun
//           />
//           <ShimmerPlaceholder
//             ref={secondLineRef}
//             stopAutoRun
//           />
//           <ShimmerPlaceholder
//             ref={thirdLineRef}
//             stopAutoRun
//           />
//         </View>
//       </View>
//     </View>
//   )
// }