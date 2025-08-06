import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAboutPage extends Struct.ComponentSchema {
  collectionName: 'components_about_about_pages';
  info: {
    displayName: 'About Page';
    icon: 'dashboard';
  };
  attributes: {
    long_description: Schema.Attribute.Text;
    pictures: Schema.Attribute.Media<'images' | 'files', true>;
    short_description: Schema.Attribute.Text;
    title_1: Schema.Attribute.String;
    title_2: Schema.Attribute.String;
  };
}

export interface AboutChabadTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_chabad_teams';
  info: {
    displayName: 'chabad_team';
    icon: 'emotionHappy';
  };
  attributes: {
    name: Schema.Attribute.String;
    rol: Schema.Attribute.String;
  };
}

export interface AboutHomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_home_abouts';
  info: {
    displayName: 'Home About';
    icon: 'apps';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    description_1: Schema.Attribute.Text;
    description_2: Schema.Attribute.Text;
    item_list: Schema.Attribute.Component<'about.item', true>;
    pictures: Schema.Attribute.Media<'images' | 'files', true>;
    primary_description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whatsapp_group_link: Schema.Attribute.String;
  };
}

export interface AboutItem extends Struct.ComponentSchema {
  collectionName: 'components_about_items';
  info: {
    displayName: 'item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface AboutSidebar extends Struct.ComponentSchema {
  collectionName: 'components_about_sidebars';
  info: {
    displayName: 'sidebar';
    icon: 'folder';
  };
  attributes: {
    chabad_team: Schema.Attribute.Component<'about.chabad-team', true>;
    description_sidebar: Schema.Attribute.Text;
    title_sidebar: Schema.Attribute.String;
  };
}

export interface GlobalCopiesPage extends Struct.ComponentSchema {
  collectionName: 'components_global_copies_pages';
  info: {
    displayName: 'Copies Page';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface GlobalDayOfTheWeek extends Struct.ComponentSchema {
  collectionName: 'components_global_day_of_the_weeks';
  info: {
    displayName: 'day_of_the_week';
    icon: 'connector';
  };
  attributes: {
    all_day: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    day_name: Schema.Attribute.Boolean;
  };
}

export interface GlobalHomeVideo extends Struct.ComponentSchema {
  collectionName: 'components_global_home_videos';
  info: {
    displayName: 'home_video';
    icon: 'file';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    is_active: Schema.Attribute.Enumeration<['Active', 'Disabled']>;
    title: Schema.Attribute.String;
    video_url: Schema.Attribute.String;
  };
}

export interface GlobalRepeatControl extends Struct.ComponentSchema {
  collectionName: 'components_global_repeat_controls';
  info: {
    displayName: 'repeat_control';
    icon: 'connector';
  };
  attributes: {
    all_day: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    date: Schema.Attribute.Date & Schema.Attribute.Required;
    end_date: Schema.Attribute.Date & Schema.Attribute.Required;
    hour_end: Schema.Attribute.Time;
    hour_start: Schema.Attribute.Time;
    repeat_mode: Schema.Attribute.Enumeration<['once', 'range', 'weekly']> &
      Schema.Attribute.Required;
    start_date: Schema.Attribute.Date & Schema.Attribute.Required;
    weekly_repeat: Schema.Attribute.Component<'global.weekly-repeat', false> &
      Schema.Attribute.Required;
  };
}

export interface GlobalSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_global_social_medias';
  info: {
    displayName: 'social_media';
    icon: 'star';
  };
  attributes: {
    link_facebook: Schema.Attribute.String;
    link_instagram: Schema.Attribute.String;
  };
}

export interface GlobalTags extends Struct.ComponentSchema {
  collectionName: 'components_global_tags';
  info: {
    displayName: 'Tags';
    icon: 'priceTag';
  };
  attributes: {
    tag_name: Schema.Attribute.String;
  };
}

export interface GlobalVisitorInfo extends Struct.ComponentSchema {
  collectionName: 'components_global_visitor_infos';
  info: {
    displayName: 'visitor Info';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface GlobalWeeklyRepeat extends Struct.ComponentSchema {
  collectionName: 'components_global_weekly_repeat_s';
  info: {
    displayName: 'weekly_repeat ';
    icon: 'connector';
  };
  attributes: {
    Friday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    friday_all_day: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    friday_hour_end: Schema.Attribute.Time;
    friday_hour_start: Schema.Attribute.Time;
    Monday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    monday_all_day: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    monday_hour_end: Schema.Attribute.Time &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'18:30:00.000'>;
    monday_hour_start: Schema.Attribute.Time &
      Schema.Attribute.DefaultTo<'10:00:00.000'>;
    Saturday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    saturday_all_day: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    saturday_hour_end: Schema.Attribute.Time;
    saturday_hour_start: Schema.Attribute.Time;
    Sunday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    sunday_all_day: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    sunday_hour_end: Schema.Attribute.Time;
    sunday_hour_start: Schema.Attribute.Time;
    Thursday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    thursday_all_day: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    thursday_hour_end: Schema.Attribute.Time;
    thursday_hour_start: Schema.Attribute.Time;
    Tuesday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    tuesday_all_day: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    tuesday_hour_end: Schema.Attribute.Time;
    tuesday_hour_start: Schema.Attribute.Time;
    Wednesday: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    wednesday_all_day: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    wednesday_hour_end: Schema.Attribute.Time;
    wednesday_hour_start: Schema.Attribute.Time;
  };
}

export interface PackagesHeroPackages extends Struct.ComponentSchema {
  collectionName: 'components_packages_hero_packages';
  info: {
    displayName: 'hero_packages';
    icon: 'apps';
  };
  attributes: {
    description_1: Schema.Attribute.Text;
    description_2: Schema.Attribute.Text;
    pictures: Schema.Attribute.Media<'images' | 'files', true>;
    show_gobeyond_logo: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface PackagesWhyPackages extends Struct.ComponentSchema {
  collectionName: 'components_packages_why_packages';
  info: {
    displayName: 'whyPackages';
    icon: 'apps';
  };
  attributes: {
    description_card: Schema.Attribute.Text;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title_card: Schema.Attribute.String;
  };
}

export interface PricingPriceOption extends Struct.ComponentSchema {
  collectionName: 'components_pricing_price_options';
  info: {
    displayName: 'Price Option';
    icon: 'priceTag';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface ShabbatBoxOption extends Struct.ComponentSchema {
  collectionName: 'components_shabbat_box_options';
  info: {
    displayName: 'Option';
    icon: 'bulletList';
  };
  attributes: {
    additionalGuestPrice: Schema.Attribute.Decimal;
    basePrice: Schema.Attribute.Decimal;
    description: Schema.Attribute.Text;
    details: Schema.Attribute.String;
    includes: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    servingSize: Schema.Attribute.String;
    variants: Schema.Attribute.Component<'shabbat-box.variant', true>;
  };
}

export interface ShabbatBoxSidebar extends Struct.ComponentSchema {
  collectionName: 'components_shabbat_box_sidebars';
  info: {
    displayName: 'sidebar';
    icon: 'dashboard';
  };
  attributes: {
    description_sidebar: Schema.Attribute.Text;
    title_sidebar: Schema.Attribute.String;
  };
}

export interface ShabbatBoxVariant extends Struct.ComponentSchema {
  collectionName: 'components_shabbat_box_variants';
  info: {
    displayName: 'Variant';
    icon: 'layer';
  };
  attributes: {
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    serves: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShabbatActivity extends Struct.ComponentSchema {
  collectionName: 'components_shabbat_activities';
  info: {
    description: 'Shabbat and Holiday activities with time';
    displayName: 'Activity';
  };
  attributes: {
    activity: Schema.Attribute.String & Schema.Attribute.Required;
    hora: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ShabbatItemCustomMenu extends Struct.ComponentSchema {
  collectionName: 'components_shabbat_item_custom_menus';
  info: {
    displayName: 'item_custom_menu';
    icon: 'apps';
  };
  attributes: {
    category_name: Schema.Attribute.String;
    option: Schema.Attribute.Component<'shabbat-box.option', true>;
  };
}

export interface ShabbatRegisterForMealSection extends Struct.ComponentSchema {
  collectionName: 'components_shabbat_register_for_meal_sections';
  info: {
    displayName: 'register_for_meal_section';
    icon: 'cup';
  };
  attributes: {
    description: Schema.Attribute.String;
    item_included: Schema.Attribute.Component<'about.item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      >;
    title: Schema.Attribute.String;
    title_form: Schema.Attribute.String;
  };
}

export interface ShabbatShabbatBoxSection extends Struct.ComponentSchema {
  collectionName: 'components_shabbat_shabbat_box_sections';
  info: {
    displayName: 'shabbat_box_section';
    icon: 'cup';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tags: Schema.Attribute.Component<'global.tags', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-page': AboutAboutPage;
      'about.chabad-team': AboutChabadTeam;
      'about.home-about': AboutHomeAbout;
      'about.item': AboutItem;
      'about.sidebar': AboutSidebar;
      'global.copies-page': GlobalCopiesPage;
      'global.day-of-the-week': GlobalDayOfTheWeek;
      'global.home-video': GlobalHomeVideo;
      'global.repeat-control': GlobalRepeatControl;
      'global.social-media': GlobalSocialMedia;
      'global.tags': GlobalTags;
      'global.visitor-info': GlobalVisitorInfo;
      'global.weekly-repeat': GlobalWeeklyRepeat;
      'packages.hero-packages': PackagesHeroPackages;
      'packages.why-packages': PackagesWhyPackages;
      'pricing.price-option': PricingPriceOption;
      'shabbat-box.option': ShabbatBoxOption;
      'shabbat-box.sidebar': ShabbatBoxSidebar;
      'shabbat-box.variant': ShabbatBoxVariant;
      'shabbat.activity': ShabbatActivity;
      'shabbat.item-custom-menu': ShabbatItemCustomMenu;
      'shabbat.register-for-meal-section': ShabbatRegisterForMealSection;
      'shabbat.shabbat-box-section': ShabbatShabbatBoxSection;
    }
  }
}
