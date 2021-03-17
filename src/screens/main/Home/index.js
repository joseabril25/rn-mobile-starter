import React from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import Card from '../../../components/Card';
import { MainLayout } from '../../../components/Layout';
import styles from './styles'


const Home = ({ analyticsData }) => {

  const getTitle = (title) => {
    switch(title) {
      case 'totalUsers':
        return 'Total Users';
      case 'totalFemale':
        return 'Female Users';
      case 'totalMale':
        return 'Male Users';
      case 'activeUsers':
        return 'Active Users';
      case 'inactiveUsers':
        return 'Inactive Users';
      case 'emailUsers':
        return 'Email Users';
      case 'mobileUsers':
        return 'Mobile Users';
      default:
        break;
    }
  }

  const _renderAnalytics = ({ item }) => (
    <Card style={{ marginBottom: 16 }}>
      <View style={styles.taskBody}>
        <View style={styles.taskBodyInfo}>
          <View>
            <Text style={styles.taskBodyTitle}>{getTitle(item.title)}</Text>
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
        data={analyticsData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={_renderAnalytics}
        ListHeaderComponent={
          <View>
            <View style={styles.heading}>
              <Text style={styles.headingTitle}>Latest Analytics Data</Text>
            </View>
          </View>
        }
        ListEmptyComponent={() => <View><Text>There is nothing here</Text></View>}
      />
    </MainLayout>
  ) 
}

const mapStateToProps = ({ app }) => ({
  analyticsData: app.analyticsData
});

export default connect(mapStateToProps)(Home);