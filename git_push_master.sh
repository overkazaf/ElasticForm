git add .
echo 'enter your comments...'
read c
git commit -m '${c}'
echo 'commit successfully'
git push origin master
