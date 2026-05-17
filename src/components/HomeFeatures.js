import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  SPACING,
  FONT_SIZE,
  RADIUS,
} from '../styles';

import useAppTheme from '../theme/useAppTheme';

const HomeFeatures = ({ handleCategory, handleSort }) => {

  const theme = useAppTheme();

  const [sortedData, setSortedData] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}>

      {/* Top Row */}
      <View style={styles.topRow}>

        <Text
          style={[
            styles.title,
            {
              color: theme.text,
            },
          ]}>
          All Featured
        </Text>

        <View style={styles.rightBtns}>

          {/* Sort */}
          <TouchableOpacity
            onPress={() => setSortedData(!sortedData)}>
            
            <View
              style={[
                styles.btn,
                {
                  backgroundColor: theme.card,
                },
              ]}>
              
              <Text
                style={[
                  styles.btnText,
                  {
                    color: theme.text,
                  },
                ]}>
                Sort
              </Text>

              <Image
                source={require('../assets/sort-icon.png')}
              />
            </View>
          </TouchableOpacity>

          {sortedData && (
            <View
              style={[
                styles.sortBox,
                {
                  backgroundColor: theme.card,
                },
              ]}>

              <TouchableOpacity
                onPress={() => {
                  handleSort('high');
                  setSortedData(true);
                }}>
                
                <Text
                  style={[
                    styles.sortItem,
                    {
                      color: theme.secondaryText,
                    },
                  ]}>
                  {' '}
                  Price: High to Low
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  handleSort('low');
                  setSortedData(true);
                }}>
                
                <Text
                  style={[
                    styles.sortItem,
                    {
                      color: theme.secondaryText,
                    },
                  ]}>
                  {' '}
                  Price: Low to High
                </Text>
              </TouchableOpacity>

              {/* Clear Sort */}
              <TouchableOpacity
                style={[
                  styles.clearBtn,
                  {
                    backgroundColor: theme.secondary,
                  },
                ]}
                onPress={() => {
                  handleSort(null);
                  setSortedData(false);
                }}>
                
                <Text style={styles.clearText}>
                  Clear Sort
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Filter */}
          <TouchableOpacity
            onPress={() => setShowFilter(!showFilter)}>

            <View
              style={[
                styles.btn,
                {
                  backgroundColor: theme.card,
                },
              ]}>
              
              <Text
                style={[
                  styles.btnText,
                  {
                    color: theme.text,
                  },
                ]}>
                Filter
              </Text>

              <Image
                source={require('../assets/flt-icon.png')}
              />
            </View>
          </TouchableOpacity>

          {showFilter && (
            <View
              style={[
                styles.filterBox,
                {
                  backgroundColor: theme.card,
                },
              ]}>

              <TouchableOpacity
                onPress={() => {
                  handleCategory("men's clothing");
                  setShowFilter(false);
                }}>
                
                <Text
                  style={[
                    styles.filterItem,
                    {
                      color: theme.secondaryText,
                    },
                  ]}>
                  {' '}
                  Mens
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  handleCategory("women's clothing");
                  setShowFilter(false);
                }}>
                
                <Text
                  style={[
                    styles.filterItem,
                    {
                      color: theme.secondaryText,
                    },
                  ]}>
                  {' '}
                  Womens
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  handleCategory('jewelery');
                  setShowFilter(false);
                }}>
                
                <Text
                  style={[
                    styles.filterItem,
                    {
                      color: theme.secondaryText,
                    },
                  ]}>
                  {' '}
                  Jewellery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  handleCategory('electronics');
                  setShowFilter(false);
                }}>
                
                <Text
                  style={[
                    styles.filterItem,
                    {
                      color: theme.secondaryText,
                    },
                  ]}>
                  {' '}
                  Electronics
                </Text>
              </TouchableOpacity>

              {/* Clear Filter */}
              <TouchableOpacity
                style={[
                  styles.clearBtn,
                  {
                    backgroundColor: theme.secondary,
                  },
                ]}
                onPress={() => {
                  handleCategory(null);
                  setShowFilter(false);
                }}>
                
                <Text style={styles.clearText}>
                  Clear Filter
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Categories */}
      <View
        style={[
          styles.categoryCont,
          {
            backgroundColor: theme.card,
          },
        ]}>

        {/* Mens */}
        <TouchableOpacity
          onPress={() =>
            handleCategory("men's clothing")
          }
          style={styles.categoryItem}>

          <Image
            source={require('../assets/mens-img.png')}
            style={styles.categoryImg}
          />

          <Text
            style={[
              styles.categoryText,
              {
                color: theme.secondaryText,
              },
            ]}>
            Mens
          </Text>
        </TouchableOpacity>

        {/* Womens */}
        <TouchableOpacity
          onPress={() =>
            handleCategory("women's clothing")
          }
          style={styles.categoryItem}>

          <Image
            source={require('../assets/womens-img.png')}
            style={styles.categoryImg}
          />

          <Text
            style={[
              styles.categoryText,
              {
                color: theme.secondaryText,
              },
            ]}>
            Womens
          </Text>
        </TouchableOpacity>

        {/* Jewelry */}
        <TouchableOpacity
          onPress={() =>
            handleCategory('jewelery')
          }
          style={styles.categoryItem}>

          <Image
            source={require('../assets/jewels-icon.jpg')}
            style={styles.categoryImg}
          />

          <Text
            style={[
              styles.categoryText,
              {
                color: theme.secondaryText,
              },
            ]}>
            Jewelry
          </Text>
        </TouchableOpacity>

        {/* Electronics */}
        <TouchableOpacity
          onPress={() =>
            handleCategory('electronics')
          }
          style={styles.categoryItem}>

          <Image
            source={require('../assets/elect-icon.jpg')}
            style={styles.categoryImg}
          />

          <Text
            style={[
              styles.categoryText,
              {
                color: theme.secondaryText,
              },
            ]}>
            Electronics
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeFeatures;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.m,
    marginTop: SPACING.s,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 'bold',
  },

  rightBtns: {
    flexDirection: 'row',
  },

  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
    borderRadius: RADIUS.md,
    elevation: 3,
    marginLeft: SPACING.sm,
  },

  btnText: {
    fontSize: FONT_SIZE.s,
    marginRight: 5,
  },

  categoryItem: {
    alignItems: 'center',
  },

  categoryImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  categoryText: {
    marginTop: 6,
    fontSize: 13,
  },

  categoryCont: {
    padding: SPACING.m,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.l,
  },

  sortItem: {
    paddingVertical: SPACING.s,
    fontSize: FONT_SIZE.m,
  },

  filterItem: {
    paddingVertical: SPACING.s,
    fontSize: FONT_SIZE.m,
  },

  sortBox: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: SPACING.s,
    borderRadius: 10,
    elevation: 8,
    width: 160,
    zIndex: 100,
  },

  filterBox: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: SPACING.s,
    borderRadius: 10,
    elevation: 8,
    width: 170,
    zIndex: 100,
  },

  clearBtn: {
    top: SPACING.s,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  clearText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: FONT_SIZE.s,
  },
});