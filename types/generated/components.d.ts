import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSharedImage extends Schema.Component {
  collectionName: 'components_seo_shared_images';
  info: {
    displayName: 'sharedImage';
    icon: 'picture';
  };
  attributes: {
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
    icon: 'attachment';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    image: Attribute.Component<'seo.shared-image'>;
  };
}

export interface PageRelationArticle extends Schema.Component {
  collectionName: 'components_page_relation_articles';
  info: {
    displayName: 'relationArticle';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    articles: Attribute.Relation<
      'page.relation-article',
      'oneToMany',
      'api::article.article'
    >;
    description: Attribute.Text;
    author: Attribute.String;
    url: Attribute.Text;
  };
}

export interface PageMitraInfo extends Schema.Component {
  collectionName: 'components_page_mitra_infos';
  info: {
    displayName: 'mitraInfo';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    logoImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    description: Attribute.String;
  };
}

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'header';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    button: Attribute.Component<'page.button'>;
  };
}

export interface PageGroupDetail extends Schema.Component {
  collectionName: 'components_page_group_details';
  info: {
    displayName: 'groupDetail';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    advantages2: Attribute.Component<'page.advantages2', true>;
  };
}

export interface PageFeedback extends Schema.Component {
  collectionName: 'components_page_feedbacks';
  info: {
    displayName: 'feedback';
    icon: 'apps';
    description: '';
  };
  attributes: {
    logoImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    decription: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    name: Attribute.String;
    position: Attribute.String;
  };
}

export interface PageButton extends Schema.Component {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'button';
    icon: 'bold';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageAdvantages2 extends Schema.Component {
  collectionName: 'components_page_advantages2s';
  info: {
    displayName: 'advantages2';
    description: '';
  };
  attributes: {
    logoImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'page.button', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface PageAdvantage1 extends Schema.Component {
  collectionName: 'components_page_advantage1s';
  info: {
    displayName: 'advantage1';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface NavbarSubMenu extends Schema.Component {
  collectionName: 'components_page_sub_menus';
  info: {
    displayName: 'SubMenu';
    icon: 'apps';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.Text;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface NavbarNavbar extends Schema.Component {
  collectionName: 'components_page_navbars';
  info: {
    displayName: 'navbar';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    button: Attribute.Component<'page.button'>;
  };
}

export interface NavbarMenu extends Schema.Component {
  collectionName: 'components_navbar_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    part: Attribute.String;
    subMenu: Attribute.Component<'navbar.sub-menu', true>;
  };
}

export interface NavbarMainMenu extends Schema.Component {
  collectionName: 'components_navbar_main_menus';
  info: {
    displayName: 'MainMenu';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    menu: Attribute.Component<'navbar.menu', true>;
  };
}

export interface FooterSocialLink extends Schema.Component {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'social-link';
    icon: 'attachment';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    url: Attribute.Text;
  };
}

export interface FooterLinkItems extends Schema.Component {
  collectionName: 'components_footer_link_items';
  info: {
    displayName: 'LinkItems';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.Text;
  };
}

export interface FooterFooterStatus extends Schema.Component {
  collectionName: 'components_footer_footer_statuses';
  info: {
    displayName: 'FooterStatus';
    icon: 'bell';
  };
  attributes: {
    statusText: Attribute.String;
    statusDescription: Attribute.Text;
    statusColor: Attribute.String;
  };
}

export interface FooterFooterSection extends Schema.Component {
  collectionName: 'components_footer_footer_sections';
  info: {
    displayName: 'FooterSection';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'footer.link-items', true>;
  };
}

export interface FooterFooterCertification extends Schema.Component {
  collectionName: 'components_footer_footer_certifications';
  info: {
    displayName: 'FooterCertification';
    icon: 'apps';
  };
  attributes: {
    certificationImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    certificationDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.shared-image': SeoSharedImage;
      'seo.seo': SeoSeo;
      'page.relation-article': PageRelationArticle;
      'page.mitra-info': PageMitraInfo;
      'page.header': PageHeader;
      'page.group-detail': PageGroupDetail;
      'page.feedback': PageFeedback;
      'page.button': PageButton;
      'page.advantages2': PageAdvantages2;
      'page.advantage1': PageAdvantage1;
      'navbar.sub-menu': NavbarSubMenu;
      'navbar.navbar': NavbarNavbar;
      'navbar.menu': NavbarMenu;
      'navbar.main-menu': NavbarMainMenu;
      'footer.social-link': FooterSocialLink;
      'footer.link-items': FooterLinkItems;
      'footer.footer-status': FooterFooterStatus;
      'footer.footer-section': FooterFooterSection;
      'footer.footer-certification': FooterFooterCertification;
    }
  }
}
