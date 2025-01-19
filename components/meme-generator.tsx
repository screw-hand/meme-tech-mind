"use client";
import { Icon } from "@iconify/react";
import ICON_LIST from '@/config/iconifly-skill-icon-list'
import html2canvas from 'html2canvas';
import { Button } from "@/components/ui/button"

const ICONIFY_TYPE_PREFIX = 'skill-icons:';

export function MemeGenerator({ name }: {name: string}) {
  const attackTarget = '玩梗'


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

  const handleGenerateMeme = async () => {
    const memeEl = document.getElementById('meme');
    if (!memeEl) return;

    // 临时移除边框
    const originalBorder = memeEl.style.border;
    memeEl.style.border = 'none';

    try {
      const canvas = await html2canvas(memeEl, {
        backgroundColor: null,
        scale: 2, // 提高清晰度
      });

      // 创建下载链接
      const link = document.createElement('a');
      link.download = `tech-meme-${name}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } finally {
      // 恢复边框
      memeEl.style.border = originalBorder;
    }
  }

  return (
    <div className="space-y-6 text-center">
      {/* meme start */}
      <div id="meme" className="relative inline-block px-5 py-5 border-2">
        <Icon icon={getIconifyIconName(name)} className="text-9xl text-center mx-auto" />
        {/* TODO position need to let user custom config */}
        <span className="text-5xl absolute right-1 top-[20px]">
          💧
        </span>
        <p>无语,跟你讲不下去，<br/> 典型的{attackTarget}思维
        </p>
      {/* meme end */}
      </div>
      {/* control */}
      <div>
      <Button onClick={handleGenerateMeme}>
        保存梗图
      </Button>
      </div>
    </div>
  )
}
