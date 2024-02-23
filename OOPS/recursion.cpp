#include <iostream>
#include<stdio.h>
using namespace std;

/*void f(int n){
    if(n<=0){      TO PRINT UPTO LINEARLY///////
        return;
    }
    f(n-1);
    cout<<n<<endl;
    
}  */
/*
void f(int n){  
    if(n<=0){     
        return;     ////////TO PRINT FROM N TO 0//////
    }
    cout<<n<<endl;
    f(n-1);
    
}
*/
/*
int s(int n){
    if(n<=0) return 0;  ///FOR FINDING SUM OF N NUMBERS///////
    return n+s(n-1);
}
*/
/*
int fa(int n){
    if(n<=1) return 1;   /////TO PRINT FACTORIAL OF A NUMBER//////
    return n*fa(n-1);
}
*/

/*void a(int i,int arr[],int n){
    if(i>=n/2) return;                 //////FOR REVERSING ARRAY/////
    swap(arr[i],arr[n-i-1]);
    a(i+1,arr,n);
} */

/*
bool pal(int i,string s,int l){
    if(i>=l/2) return true;
    if(s[i]!=s[l-i-1]) return false;   ///////CHECKING PALINDRONE//////
   return  pal(i+1,s,l);
    
}
*/

/*int fibe(int n){
    if(n<=1) return n; 
    int l=fibe(n-1);   for finding fibonaque series
    int sl=fibe(n-2);
    return l+sl;
}
*/
int main(){
    int n;
    cin>>n;
    //f(n);
   // cout<<s(n);
   //cout<<fa(n);
  /*int arr[n];
   for(int i=0;i<n;i++){
    cin>>arr[i];


   }
   a(0,arr,n);
   for(int i=0;i<n;i++){
    cout<<arr[i];
   }
   */ 

 /*  string str;
cin>>str;
int l=str.length();
cout<<pal(0,str,l);
*/

//cout<<fibe(n);


    
    
    return 0;
}