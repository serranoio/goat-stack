import { Button } from '../../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../../ui/navigation-menu';
import { AnchorIcon, AxeIcon, LanguagesIcon, SettingsIcon } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '../../ui/menubar';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
];

export default function Nav() {
  return (
    <div className="flex justify-between position-fixed t-2% bg-foreground/5 mt-4 px-8 py-4 rounded-lg mx-auto w-3/4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <SettingsIcon />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <Menubar className="flex ">
                <MenubarMenu>
                  <MenubarTrigger>
                    <LanguagesIcon />
                  </MenubarTrigger>
                  <MenubarContent>
                    <ul>
                      {languages.map((language: any) => {
                        return (
                          <MenubarItem
                            className="px-4 py-2"
                            data-code={language.code}
                            key={language.code}
                          >
                            <Button variant={'outline'}>{language.name}</Button>
                          </MenubarItem>
                        );
                      })}
                    </ul>
                    <MenubarSeparator />
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>
                    <AxeIcon />
                  </MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>
                    <AnchorIcon />
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

