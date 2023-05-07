/*
 * ZenSquare is an opensource forums
 *
 * Copyright (C) 2023  Enaium
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { createRouter, createWebHistory } from "vue-router"
import HomeLayout from "@/layouts/HomeLayout"
import Home from "@/views/Home"
import WhatsNew from "@/views/WhatsNew"
import Members from "@/views/Members"
import Forums from "@/views/Forums"
import PostThread from "@/views/PostThread"
import Threads from "@/views/Threads"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: <HomeLayout />,
      children: [
        {
          path: "",
          name: "home",
          component: <Home />,
        },
        {
          path: "whats-new",
          name: "whats-new",
          component: <WhatsNew />,
        },
        {
          path: "members",
          name: "members",
          component: <Members />,
        },
        {
          path: "forums/:forum",
          name: "forums",
          component: <Forums />,
        },
        {
          path: "forums/:forum/threads",
          name: "post-thread",
          component: <PostThread />,
        },
        {
          path: "forums/threads/:thread",
          name: "threads",
          component: <Threads />,
        },
      ],
    },
  ],
})

export default router
