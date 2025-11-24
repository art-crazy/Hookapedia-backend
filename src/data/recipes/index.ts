import { Recipe } from './types';
import { legkayaKrepostDeserty } from './by-strength/legkaya-krepost/deserty';
import { legkayaKrepostEkzotika } from './by-strength/legkaya-krepost/ekzotika';
import { legkayaKrepostFrukty } from './by-strength/legkaya-krepost/frukty';
import { srednyayaKrepostDeserty } from './by-strength/srednyaya-krepost/deserty';
import { srednyayaKrepostEkzotika } from './by-strength/srednyaya-krepost/ekzotika';
import { srednyayaKrepostFrukty } from './by-strength/srednyaya-krepost/frukty';
import { srednyayaKrepostPryanostiTravy } from './by-strength/srednyaya-krepost/pryanosti-travy';
import { srednyayaKrepostTsitrusovye } from './by-strength/srednyaya-krepost/tsitrusovye';
import { srednyayaKrepostYagody } from './by-strength/srednyaya-krepost/yagody';
import { krepkayaKrepostTsitrusovye } from './by-strength/krepkaya-krepost/tsitrusovye';
import { krepkayaKrepostEkzotika } from './by-strength/krepkaya-krepost/ekzotika';
import { krepkayaKrepostYagody } from './by-strength/krepkaya-krepost/yagody';

export const allRecipes: Recipe[] = [
  ...legkayaKrepostDeserty,
  ...legkayaKrepostEkzotika,
  ...legkayaKrepostFrukty,
  ...srednyayaKrepostDeserty,
  ...srednyayaKrepostEkzotika,
  ...srednyayaKrepostFrukty,
  ...srednyayaKrepostPryanostiTravy,
  ...srednyayaKrepostTsitrusovye,
  ...srednyayaKrepostYagody,
  ...krepkayaKrepostTsitrusovye,
  ...krepkayaKrepostEkzotika,
  ...krepkayaKrepostYagody,
];

// Helper for scripts that want a function-style API
export const loadAllRecipes = (): Recipe[] => allRecipes;

export const recipes = allRecipes;
