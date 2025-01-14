import React from 'react';
import cn from 'classnames';
import TopCodeMenu from 'src/components/Menu/TopCodeMenu';
import { RightSidebar } from './RightSidebar';
import { RightSidebarMobile } from './RightSidebarMobile';
import { MenuData } from './menu-data';
import { VersionMenuProps } from './VersionMenu';
import { rightSidebarWrapper, rightSidebarWrapperDesktop } from './RightSidebar.module.css';
import { useMediaQuery } from '@react-hook/media-query';

const useScreenSize = () => {
  return useMediaQuery('only screen and (min-width: 1040px)');
};

type RightSidebarWrapperProps = {
  menuData: MenuData[];
  languages?: string[];
  versionData?: VersionMenuProps;
};

export const RightSidebarWrapper = ({ menuData, languages, versionData }: RightSidebarWrapperProps) => {
  const languagesExist = languages && languages.length > 0;
  const isDesktop = useScreenSize();

  return (
    <div
      className={cn(
        'fixed md:sticky top-64 left-0 right-0 bg-white flex flex-row md:flex-col justify-between md:justify-start pt-4 z-1 h-72 md:h-screen',
        {
          [rightSidebarWrapperDesktop]: isDesktop,
        },
      )}
    >
      <RightSidebarMobile menuData={menuData} languages={languagesExist} />
      {languagesExist && versionData && <TopCodeMenu languages={languages} versionData={versionData} />}
      <RightSidebar languages={languagesExist} menuData={menuData} />
    </div>
  );
};
