import React from 'react';

export interface Category {
  name: string;
  displayName: string;
  icon: React.ReactNode;
  desc?: string;
}

export interface Site {
  name: string;
  cateName: string;
  favicon: string;
  url: string;
  desc?: string;
}

export interface SiteStat {
  like: number;
  view: number;
  liked?: boolean;
}

export interface BannerCard {

}