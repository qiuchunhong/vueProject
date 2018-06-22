<template>
  <div>
      <div class="ghost clear bor_b">
            <h2 class="toTit">镜像</h2>
            <ul class="ghostTit">
                <li class="">标准镜像</li>
                <li class="integration">集成镜像</li>
                <li class="user none active" style="display: list-item;">自制镜像</li>
                <li class="activeLine" style="left: 246px;"></li>
            </ul>
            <div class="ghostL Acon" style="display: none;">
                <div class="standard win active">
                    <i class="icon"></i>
                    <p class="tit">Windows</p>
                    <p class="con"><span>Win 2012 R2 标准版 64位（CN）</span></p>
                    <i class="more"></i>
                    <ul class="moreList none FTwindows w400" style="display: none;"><li class="w245 active" title="Win 2012 R2 标准版 64位（CN）" rel="IMGd56c81aa892e37be7e18e4" os_type="Windows"><a href="javascript:;">2012 R2 标准版 64位（CN）</a></li><li class="w245" title="Win 2012 R2 数据中心版  64位（CN）" rel="IMG93165d0a892e32c547d845" os_type="Windows"><a href="javascript:;">2012 R2 数据中心版  64位（CN）</a></li><li class="w245" title="Win 2008 R2 标准版 64位（CN）" rel="IMGffcb9939892e2ca5d60759" os_type="Windows"><a href="javascript:;">2008 R2 标准版 64位（CN）</a></li><li class="w245" title="Win 2008 R2 企业版 64位（CN）" rel="IMG122620c0892e28707ce7f2" os_type="Windows"><a href="javascript:;">2008 R2 企业版 64位（CN）</a></li></ul>
                </div>
                <div class="standard CentOS">
                    <i class="icon"></i>
                    <p class="tit">CentOS</p>
                    <p class="con"><span>选择版本</span></p>
                    <i class="more"></i>
                    <ul class="moreList none FTcentos" style="display: none;"><li class="active" title="CentOS 7.2 64位" rel="IMG37d28e42891714827ebba9" os_type="Linux"><a href="javascript:;">CentOS 7.2 64位</a></li><li class="" title="CentOS 6.8 64位" rel="IMG31fe9fcf89170c81be3236" os_type="Linux"><a href="javascript:;">CentOS 6.8 64位</a></li><li class="" title="CentOS 6.8 32位" rel="IMG895256fe89171098a32fe8" os_type="Linux"><a href="javascript:;">CentOS 6.8 32位</a></li><li class="" title="CentOS 6.5 64位" rel="IMG6d1a64638dc92e84cca87e" os_type="Linux"><a href="javascript:;">CentOS 6.5 64位</a></li></ul>
                </div>
                <div class="standard Ubuntu">
                    <i class="icon"></i>
                    <p class="tit">Ubuntu</p>
                    <p class="con"><span>选择版本</span></p>
                    <i class="more"></i>
                    <ul class="moreList none FTubuntu" style="display: none;"><li class="active" title="Ubuntu 16.04 64位" rel="IMG6414ec6d891724826db7bb" os_type="Linux"><a href="javascript:;">Ubuntu 16.04 64位</a></li><li class="" title="Ubuntu 16.04 32位" rel="IMG833f2d68891727d73145cd" os_type="Linux"><a href="javascript:;">Ubuntu 16.04 32位</a></li><li class="" title="Ubuntu 14.04.4 64位" rel="IMG6e889a189171d5485767d" os_type="Linux"><a href="javascript:;">Ubuntu 14.04.4 64位</a></li><li class="" title="Ubuntu 14.04.4 32位" rel="IMGb0f04359891720f9c2493d" os_type="Linux"><a href="javascript:;">Ubuntu 14.04.4 32位</a></li></ul>
                </div>
                <div class="standard redhat">
                    <i class="icon"></i>
                    <p class="tit">Redhat</p>
                    <p class="con"><span>选择版本</span></p>
                    <i class="more"></i>
                    <ul class="moreList none FTredhat" style="display: none;"><li title="RHEL 6.4 64位" rel="IMGcc581b25875009d1a4ee75" os_type="Linux"><a href="javascript:;">RHEL 6.4 64位</a></li><li title="RHEL 6.4 32位" rel="IMG790d7b3b8b39f8f8d07c30" os_type="Linux"><a href="javascript:;">RHEL 6.4 32位</a></li></ul>
                </div>
                <div class="standard DEBIAN">
                    <i class="icon"></i>
                    <p class="tit">Debian</p>
                    <p class="con"><span>选择版本</span></p>
                    <i class="more"></i>
                    <ul class="moreList none FTDEBIAN" style="display: none;"></ul>
                </div>
            </div>
            <div class="ghostL Acon none" style="display: none;">
                <ul class="littleL selectOne FTintegration"><li class="win active" title="IIS,SQLServer,safedog" rel="IMG79563db77935a701bf2f87" os_type="Windows">Win 2012 IIS,SQLServer,safedog</li><li class="linux" title="nginx1.7、php5.2.17、php5.3.29" rel="IMG7a03a2c342e8b0de4d84f1" os_type="Windows">Win 2008 PHP运行环境</li><li class="linux" title="云DB测试" rel="IMGd38e89175f18e03ecd7a8a" os_type="Linux">CentOS 7.2 云DB测试</li><li class="linux" title="老平台cento6.2" rel="IMG1fc7a69660e06b12079558" os_type="Linux">CentOS 6.8 老平台cento6.2</li><li class="linux" title="_O_centos62_x64" rel="IMGde0e28bf60ab54c402e25e" os_type="Linux">CentOS 6.8 _O_centos62_x64</li></ul>
            </div>
            <div class="ghostL Acon none active" style="display: block;">
                <ul class="littleL selectOne FTuser"><li class="self active" title="afadf" rel="IMG94f995f58e63dc43c7a23a" os_type="Linux">afadf</li></ul>
            </div>
        </div>
  </div>
</template>
<script>
    export default {

    }
</script>
<style>
.addFreeTrial .ghostTit{ width:100%; border-bottom: 1px solid #ddd; margin-bottom: 28px; position: relative;}
.addFreeTrial .ghostTit li{ width:85px; height: 56px; line-height: 56px; font-size: 16px; text-align: center; margin-right: 38px; cursor:pointer; color: #666;}
.addFreeTrial .ghostTit li.active{ color: #333}
.addFreeTrial .ghostTit li.activeLine{ width:86px; height: 3px; position: absolute;font-size: 0;margin: 0; background: #4273ea; bottom:-2px; left: 0;}
.addFreeTrial .ghostL .standard{ width: 150px; height: 138px; border: 1px solid #d5d5d5; position:relative; float: left; margin-right:40px; cursor:pointer;}
.addFreeTrial .ghostL .standard .icon{ display: block; width: 60px; height:60px; margin:8px auto 0;}
.addFreeTrial .ghostL .standard .tit{ font-size: 12px; text-align: center; color: #aaa; font-weight: bold; line-height: 22px;}
.addFreeTrial .ghostL .standard .con{ width: 100%; box-sizing: border-box; border-top: 1px solid #d5d5d5; margin-top:8px;padding: 3px 23px 3px 10px; line-height: 16px;color: #868686; text-align: center; height: 32px;display: table;}
.addFreeTrial .ghostL .standard .con span{display: table-cell; vertical-align:middle; text-align:center;}
.addFreeTrial .ghostL .standard .more{ display: block; width:11px; height:7px; position: absolute; bottom: 15px; right:10px; pointer-events: none;}
.addFreeTrial .ghostL .standard.active{ border: 1px solid #4273ea;}
.addFreeTrial .ghostL .standard.active .tit{color: #4273ea;}
.addFreeTrial .ghostL .standard.active .con{color: #4273ea; border-top: 1px solid #4273ea;}
.addFreeTrial .ghostL .standard.active .more{ background-position: -33px -217px;}
.addFreeTrial .ghostL .standard .moreList{ width: 330px; border: 1px solid #4273ea; padding: 7px 11px; position:absolute; top:150px; left:-1px; background: #fff;z-index:2;}
.addFreeTrial .ghostL .standard .moreList:after{content:"";width: 11px;height: 8px;top: -8px;left: 10px;display: block;position: absolute; border-bottom:1px solid #fff; z-index: 9;box-sizing: border-box;}
.addFreeTrial .ghostL .standard .moreList li{ width: 165px; height: 16px; line-height: 15px; float: left; margin-bottom: 5px; cursor: pointer;white-space: nowrap; text-overflow:ellipsis; overflow: hidden;}
.addFreeTrial .ghostL .standard .moreList li a{ font-size:13px; color: #656565;}
.addFreeTrial .ghostL .standard .moreList li a:hover{ color:#4273ea; text-decoration:none;}
.addFreeTrial .ghostL .standard .moreList.w400{ width:400px;}
.addFreeTrial .ghostL .standard .moreList li.w245{ width:200px;}
.addFreeTrial .ghostL .standard .moreList li.active a{ color: #fff; background: #9FCBF6;}
.addFreeTrial .ghostL .littleL li{ width:238px; height:40px; line-height: 40px; border:1px solid #ccc; cursor: pointer; text-indent: 30px; position:relative; margin-right: 24px; margin-bottom:10px;white-space: nowrap; text-overflow: ellipsis; overflow: hidden;}
.addFreeTrial .ghostL .littleL li:hover, .addFreeTrial .ghostL .littleL li.active{border:1px solid #4273ea;}
.addFreeTrial .ghostL .littleL li:before{ display: block; content:""; width: 22px; height:28px; position:absolute; top:6px; left:4px; }
</style>
