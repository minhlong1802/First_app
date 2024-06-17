import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bước 1: Xác định nhu cầu khách hàng',
    content: "Long đẹp trai đã rủ bạn chơi bóng rổ",
    time: "20/08/2020, 06:00",
    status: "unread"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Bạn có khách hàng mới',
    content: "Chúc mừng bạn đã có khách hàng mới, bạn hiện nay sở hữu 2000 khách hàng",
    time: "21/08/2020, 07:00",
    status: "unread"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: "Công việc sắp hết hạn trong hôm nay, bạn cần xử lý ngay",
    time: "22/08/2020, 08:00",
    status: "done"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: "Công việc sắp hết hạn trong hôm nay, bạn cần xử lý ngay",
    time: "22/08/2020, 08:00",
    status: "done"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: "Công việc sắp hết hạn trong hôm nay, bạn cần xử lý ngay",
    time: "22/08/2020, 08:00",
    status: "done"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: "Công việc sắp hết hạn trong hôm nay, bạn cần xử lý ngay",
    time: "22/08/2020, 08:00",
    status: "done"
  },
];

type ItemProps = {
  title: string,
  content: string,
  time: string,
  status: string
};

const Item = ({ title, content, time, status }: ItemProps) => (
  <View style={[styles.item, status === 'unread' && styles.unreadItem]}>
    <Image
      source={status === 'unread' ? require('../../assets/images/unread.png') : require('../../assets/images/complete.png')}
      style={styles.icon}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      {content && <Text style={styles.content}>{content}</Text>}
      {time && <Text style={styles.time}>{time}</Text>}
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item 
            title={item.title} 
            content={item.content} 
            time={item.time} 
            status={item.status} 
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  unreadItem: {
    backgroundColor: '#DDE6ED',  // darker background for unread items
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    marginTop: 5,
    color: 'gray',
  },
});

export default App;
