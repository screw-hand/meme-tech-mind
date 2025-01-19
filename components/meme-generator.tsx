"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import ICON_LIST from '@/config/iconifly-skill-icon-list'

const ICONIFY_TYPE_PREFIX = 'skill-icons:';

export function MemeGenerator({ name = 'react'}: {name: string}) {

  const getIconifyIconName = (name: string) => {
    let iconName = name;
    let result = `${ICONIFY_TYPE_PREFIX}${iconName}`
    const filterIconifyList = ICON_LIST.filter(x=> x.includes(name))
    if (filterIconifyList?.length > 0) {
      iconName = filterIconifyList[0]
    }
    result = `${ICONIFY_TYPE_PREFIX}${iconName}`
    console.log('getIconifyIconName', result)
    return result
  }

  return (
    <div className="space-y-6">
      <Icon icon={getIconifyIconName(name)} />
    </div>
  )
}
