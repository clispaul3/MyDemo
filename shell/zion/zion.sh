#!/bin/sh
if [ $# -ge 1 ]
then
  if [ $1 = --config ]
  then
    node index.js
  else
    echo "参数格式不正确，请查看相关文档"
  fi   
else
  config_file=zion.config.json
  if [ -f $config_file ]
  then
    echo "文件存在"
  else
    echo $config_file "不存在"
  fi
fi