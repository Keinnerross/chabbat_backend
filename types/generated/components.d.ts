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
    includes: Schema.Attribute.JSON;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quantity: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    servingSize: Schema.Attribute.String;
    variants: Schema.Attribute.Component<'shabbat-box.variant', true>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about-page': AboutAboutPage;
      'about.home-about': AboutHomeAbout;
      'about.item': AboutItem;
      'global.tags': GlobalTags;
      'packages.hero-packages': PackagesHeroPackages;
      'packages.why-packages': PackagesWhyPackages;
      'pricing.price-option': PricingPriceOption;
      'shabbat-box.option': ShabbatBoxOption;
      'shabbat-box.variant': ShabbatBoxVariant;
    }
  }
}
