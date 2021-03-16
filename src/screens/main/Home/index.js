import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import Card from '../../../components/Card';
import { MainLayout } from '../../../components/Layout';
import styles from './styles'

const data = [
  { title: 'Total Users', data: 200 },
  { title: 'Per Gender', data: 45 },
  { title: 'Active', data: 145 },
  { title: 'Inactive', data: 37 },
  { title: 'Per Email', data: 140 },
  { title: 'Per Mobile', data: 20 },
  { title: 'Per Social Media', data: 40 },
  { title: 'Registration Per Day', data: 23 },
]
const Home = () => {

  const _renderAnalytics = ({ item }) => (
    <Card style={{ marginBottom: 16 }}>
      <View style={styles.taskBody}>
        <View style={styles.taskBodyInfo}>
          <View>
            <Text style={styles.taskBodyTitle}>{item.title}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.tag}>{item.data}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <MainLayout>
      <FlatList 
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={_renderAnalytics}
        ListHeaderComponent={
          <View>
            <View style={styles.heading}>
              <Text style={styles.headingTitle}>Get the latest analytics data</Text>
            </View>
          </View>
        }
        ListEmptyComponent={() => <View><Text>There is nothing here</Text></View>}
      />
    </MainLayout>
  ) 
}

export default Home;