#include <iostream>
#include<stdio.h>
using namespace std;

int main(){

    int n;
    cin>>n;
    int i=1;


    while(i<=n){

        int s=i-1;
        while(s){
            cout<<" ";
            s=s-1;
        }
        int j=1;
   
        while(j<=n-i+1){
          cout<<"*";
            j=j+1;
        }
        cout<<endl;
        i=i+1;
    }    return 0;
}

