<script setup lang="ts">
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import type { NavItem } from '@/types';
import { Link } from '@inertiajs/vue3';
import { LayoutGrid, Package2, ShoppingBag, Sparkles, Users } from 'lucide-vue-next';
import AppLogo from './AppLogo.vue';

const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: route('dashboard'),
    icon: LayoutGrid,
  },
  {
    title: 'Customers',
    href: route('customers.index'),
    icon: Users,
    isActive: route().current('customers.*'),
  },
  {
    title: 'Products',
    href: route('products.index'),
    icon: ShoppingBag,
    isActive: route().current('products.*'),
  },
  {
    title: 'Orders',
    href: route('orders.index'),
    icon: Package2,
    isActive: route().current('orders.*'),
  },
  {
    title: 'Features',
    href: '#',
    icon: Sparkles,
    isActive: route().current('features.*'),
    items: [{ title: 'Fake Notifications', href: route('features.index', { feature: 'fake-notifications' }) }],
  },
];
</script>

<template>
  <Sidebar collapsible="icon" variant="inset">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" as-child>
            <Link :href="route('dashboard')">
              <AppLogo />
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>

    <SidebarContent>
      <NavMain :items="mainNavItems" />
    </SidebarContent>

    <SidebarFooter>
      <NavUser />
    </SidebarFooter>
  </Sidebar>
  <slot />
</template>
