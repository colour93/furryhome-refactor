import { Category } from '@/typings';
import { FaUser, FaChalkboard, FaUserGroup, FaToolbox, FaGamepad, FaMessage } from 'react-icons/fa6';

export const categories: Category[] = [
  {
    'name': 'platform',
    'displayName': '信息平台',
    'icon': <FaChalkboard />,
    'desc': '为广大小动物们提供信息的关键平台',
  },
  {
    'name': 'community',
    'displayName': '社区 / 论坛',
    'icon': <FaMessage />,
    'desc': '来这里广交朋友~',
  },
  {
    'name': 'game',
    'displayName': '游戏',
    'icon': <FaGamepad />,
    'desc': '发现好玩的兽人游戏',
  },
  {
    'name': 'tools',
    'displayName': '实用工具',
    'icon': <FaToolbox />,
    'desc': '一些好用的工具',
  },
  {
    'name': 'organization',
    'displayName': '工作室 / 组织站点',
    'icon': <FaUserGroup />,
    'desc': '',
  },
  {
    'name': 'person',
    'displayName': '博客 / 个人站点',
    'icon': <FaUser />,
    'desc': '',
  }];