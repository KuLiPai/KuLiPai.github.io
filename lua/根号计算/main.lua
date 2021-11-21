require "import"
import "android.app.*"
import "android.os.*"
import "android.widget.*"
import "android.view.*"
import "layout"

activity.setTheme(R.Theme_Blue)
activity.setTitle("lua")
activity.setContentView(loadlayout(layout))




b.onClick=function()
l=tonumber(a.text)
print(math.sqrt(l))
  i=1
  b=1
  while true
    do
    if b<l then
      i=i+1
      b=i*i
elseif b==l
print(i)
break
     else
     
ll=l-(i-1)*(i-1)
two(i-1,ll)

      break
    end
  end
end

nb=15

function two(num,l)
i=0

w=l*100
r=tostring(num*2)
while true
do
i=i+1

t=tonumber(r..tostring(i))*i
if #tostring(num) <nb then
if t>w then
i=i-1
www=w-tonumber(r..tostring(i))*i
lll=tonumber(tostring(num)..tostring(i))
two(lll,www)
break
end
else
print(string.sub(tonumber(tostring(num)..tostring(www)),0,nb))
break

end
end
end



