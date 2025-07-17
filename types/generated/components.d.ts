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
    serves: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.String & Schema.Attribute.Required;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-page': AboutAboutPage;
      'about.chabad-team': AboutChabadTeam;
      'about.home-about': AboutHomeAbout;
      'about.item': AboutItem;
      'about.sidebar': AboutSidebar;
      'global.copies-page': GlobalCopiesPage;
      'global.social-media': GlobalSocialMedia;
      'global.tags': GlobalTags;
      'global.visitor-info': GlobalVisitorInfo;
      'packages.hero-packages': PackagesHeroPackages;
      'packages.why-packages': PackagesWhyPackages;
      'pricing.price-option': PricingPriceOption;
      'shabbat-box.option': ShabbatBoxOption;
      'shabbat-box.sidebar': ShabbatBoxSidebar;
      'shabbat-box.variant': ShabbatBoxVariant;
      'shabbat.activity': ShabbatActivity;
    }
  }
}
