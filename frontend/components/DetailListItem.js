import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

export default function DetailListItem({ icon, title, subtitle, onPress }) {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.container} onPress={onPress}>
          {icon && (
            <Icon
              name={icon}
              size={24}
              style={{
                color: '#000000',
                marginRight: 20,
              }}
            />
          )}
          <View style={styles.contentContainer}>
            <Text style={[styles.title]}>{title}</Text>
            {subtitle && (
              <Text style={styles.subtitle}>{subtitle}</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

DetailListItem.defaultProps = {
  icon: null,
  subtitle: null,
};

const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft: 24,
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle: {
    color: '#00BFFF',
    fontSize: 15,
    marginTop: 4,
  },
});
