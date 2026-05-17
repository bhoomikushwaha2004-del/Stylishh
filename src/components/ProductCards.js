import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import HearOutline from 'react-native-vector-icons/FontAwesome';
import Heart from 'react-native-vector-icons/FontAwesome';

import {
  addToWishlist,
  removeFromWishlist,
} from '../redux/slice';

import {
  SPACING,
  FONT_SIZE,
  RADIUS,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const ProductCards = ({
  item,
  cartnvg,
  dispatch,
  wishlist,
}) => {
  const theme = useAppTheme();

  const isHearted = wishlist.some(
    w => w.id === item.id,
  );

  const handleHeart = () => {
    if (isHearted) {
      dispatch(
        removeFromWishlist(item.id),
      );
    } else {
      dispatch(addToWishlist(item));
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor:
            theme.card,

          shadowColor:
            theme.text,
        },
      ]}
      onPress={() => cartnvg(item)}
    >
      <View style={styles.hertView}>
        <TouchableOpacity
          onPress={handleHeart}
        >
          {!isHearted ? (
            <HearOutline
              name="heart-o"
              size={20}
              style={[
                styles.hrtOutline,
                {
                  color: theme.text,
                },
              ]}
            />
          ) : (
            <Heart
              name="heart"
              size={20}
              color={theme.danger}
              style={
                styles.hrtOutline
              }
            />
          )}
        </TouchableOpacity>
      </View>

      {/* img */}
      <Image
        source={{ uri: item.image }}
        style={[
          styles.image,
          {
            backgroundColor:
              theme.background,
          },
        ]}
      />

      {/* content */}
      <View style={styles.content}>
        {/* Title */}
        <Text
          style={[
            styles.title,
            {
              color: theme.text,
            },
          ]}
          numberOfLines={1}
        >
          {item.title}
        </Text>

        {/* Description */}
        <Text
          style={[
            styles.desc,
            {
              color:
                theme.secondaryText,
            },
          ]}
          numberOfLines={2}
        >
          {item.description}
        </Text>

        {/* price */}
        <Text
          style={[
            styles.price,
            {
              color: theme.text,
            },
          ]}
        >
          ₹{item.price}
        </Text>

        {/* Rate */}
        <View style={styles.ratingRow}>
          <Text style={styles.star}>
            ⭐⭐⭐⭐☆
          </Text>

          <Text
            style={[
              styles.count,
              {
                color:
                  theme.secondaryText,
              },
            ]}
          >
            {' '}
            {item.rating?.count}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCards;

const styles = StyleSheet.create({
  card: {
    width: '45%',
    borderRadius: RADIUS.lg,
    margin: SPACING.s,
    elevation: 2,
    shadowOpacity: 0.08,
    shadowRadius: 6,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },

  content: {
    padding: SPACING.sm,
  },

  title: {
    fontSize: FONT_SIZE.l,
    fontWeight: '600',
  },

  desc: {
    fontSize: FONT_SIZE.s,
    marginTop: 6,
  },

  price: {
    fontSize: FONT_SIZE.l,
    fontWeight: 'bold',
    marginTop: 8,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  star: {
    color: '#F5A623',
    fontSize: FONT_SIZE.s,
  },

  count: {
    fontSize: FONT_SIZE.s,
  },

  hertView: {
    zIndex: 1,
    width: 30,
    position: 'absolute',
    left: 5,
    top: 5,
  },

  hrtOutline: {
    padding: 5,
  },

  columns: {
    paddingBottom: 16,
    gap: 16,
  },

  mainContainer: {
    paddingHorizontal: 16,
  },

  noItems: {
    fontWeight: 'bold',
    left: 20,
  },
});