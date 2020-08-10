/**
 * Copyright (c) 2009, Benjamin Joffe
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE AUTHOR AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var pixelWidth=1;
var samples=600;
var canvas;
var pic=[];
var pi=Math.PI;
var total=0;
var total=0;
var collectedStars = 0;

var arena=[];
arena[0]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[1]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[2]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[3]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[4]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[5]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,23,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[6]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[7]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[8]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[9]=[1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[10]=[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[11]=[1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[12]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[13]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[14]=[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[15]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,24,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[16]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[17]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[18]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[19]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[20]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[21]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[22]=[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[23]=[1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,21,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[24]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[25]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[26]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,8,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]
arena[27]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,23,1,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1] 
arena[28]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]
arena[29]=[1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1] 
arena[30]=[1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1]
arena[31]=[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,19,0,16,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1] 
arena[32]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1]
arena[33]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1] 
arena[34]=[1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,17,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1]
arena[35]=[1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1] 
arena[36]=[1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,15,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[37]=[1,1,1,1,1,0,0,0,1,1,1,1,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[38]=[1,1,1,1,1,0,0,0,0,0,1,0,23,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[39]=[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,12,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[40]=[1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[41]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,18,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[42]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[43]=[1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[44]=[1,1,1,1,1,1,1,1,1,1,23,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[45]=[1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,14,0,0,0,13,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[46]=[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[47]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,2,2,0,2,2,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[48]=[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,2,0,0,0,2,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[49]=[1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,2,0,0,0,2,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[50]=[1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,2,0,23,0,2,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
arena[51]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,5,2,2,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] 
arena[52]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,11,10,11,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

var playerPos=[51,30.5]; // x,y (from top left)
var playerDir=Math.PI; // theta, facing right=0=2pi
var playerPosZ=1;
var key=[0,0,0,0,0]; // left, right, up, down
var playerVelY=0;
var face=[];
var bit=[];

function changeResolution(){
	var detail = document.getElementById('hilow').options.selectedIndex;
	pixelWidth = [8,4,2,1][detail];
	samples = [50,100,200,600][detail];
    drawCanvas();
}

for (var i=1; i < 23; i++) {
	pic[i]=new Image();
	pic[i].src='wall' + i + '.gif';
}

Number.prototype.range=function(){
	return (this+2*pi)%(2*pi);
}
Number.prototype.roundC=function(){
	return Math.round(this*100)/100;
}

function wallDistance(theta){
	var dist=[];
	var x = playerPos[0], y = playerPos[1];
	var deltaX, deltaY;
	var distX, distY;
	var stepX, stepY;
	var mapX, mapY
	var atX=Math.floor(x), atY=Math.floor(y);

	for (var i=0; i<samples; i++) {
		theta+=pi/(3*samples)+2*pi;
		theta%=2*pi;

		mapX = atX, mapY = atY;

		deltaX=1/Math.cos(theta);
		deltaY=1/Math.sin(theta);

		if (deltaX>0) {
			stepX = 1;
			distX = (mapX + 1 - x) * deltaX;
		}
		else {
			stepX = -1;
			distX = (x - mapX) * (deltaX*=-1);		
		}
		if (deltaY>0) {
			stepY = 1;
			distY = (mapY + 1 - y) * deltaY;
		}
		else {
			stepY = -1;
			distY = (y - mapY) * (deltaY*=-1);
		}

		while (true) {
			if (distX < distY) {
				mapX += stepX;
				if (arena[mapX][mapY] !== 0 && arena[mapX][mapY] !== 23 && arena[mapX][mapY] !== 24) {
					dist[i]=distX;
					face[i] = arena[mapX][mapY];
					bit[i]=(y+distX/deltaY*stepY)%1 || 0;
					break;
				}
				distX += deltaX;
			}
			else {
				mapY += stepY;
				if (arena[mapX][mapY] !== 0 && arena[mapX][mapY] !== 23 && arena[mapX][mapY] !== 24) {
					dist[i]=distY;
					face[i]= arena[mapX][mapY];
					bit[i]=(x+distY/deltaX*stepX)%1 || 0;
					break;
				}
				distY += deltaY;
			}
		}
	}
	
	return dist;
}

function drawCanvas(){
	canvas.clearRect(0,0, 600, 500);
	
	canvas.save();
		canvas.fillStyle = "#CCCCCC";
		canvas.fillRect(0, 150, 600, 500);
	canvas.restore();
	
	var theta = playerDir-pi/6;
	var dist=wallDistance(theta);
	var c;	

	for (var i=0; i<samples; i++) {
		theta+=pi/(3*samples);

		var d2=dist[i];
		var d=d2*Math.cos(theta-playerDir);
		var z=1-playerPosZ/2;
		var h=600/d;

		canvas.drawImage(pic[face[i]], bit[i]*63, 0, 1, 64, i*pixelWidth, 150-h*z, pixelWidth, h)
	}
}

function nearWall(x,y){
	var xx,yy;
	if (isNaN(x)) x=playerPos[0];
	if (isNaN(y)) y=playerPos[1];
	for (var i=-0.1; i<=0.1; i+=0.2) {
		xx=Math.floor(x+i)
		for (var j=-0.1; j<=0.1; j+=0.2) {
			yy=Math.floor(y+j);
			if (arena[xx][yy] !== 0 && arena[xx][yy] !== 23 && arena[xx][yy] !== 24) return true;
		}
	}
	return false;
}

var jumpCycle=0;

function update(){

	total++;

	var change=false;

	if (jumpCycle) {
		jumpCycle--;
		change=true;
		playerPosZ = 1 + jumpCycle*(20-jumpCycle)/110;
	}
	else if (key[4]) jumpCycle=20;
	
	if (key[0]) {
		if (!key[1]) {
			playerDir-=0.07; //left
			change=true;
		}
	}
	else if (key[1]) {
		playerDir+=0.07; //right
		change=true;
	}

	if (change) {
		playerDir+=2*pi;
		playerDir%=2*pi;
	}

	if (key[2] && !key[3]) {
		if (playerVelY<0.09) playerVelY += 0.003;
	}
	else if (key[3] && !key[2]) {
		if (playerVelY>-0.05) playerVelY -= 0.003;
	}
	else {
		if (playerVelY<-0.02) playerVelY += 0.015;
		else if (playerVelY>0.02) playerVelY -= 0.015;
		else playerVelY=0;
	}
	
	if (playerVelY!=0) {
		var oldX=playerPos[0];;
		var oldY=playerPos[1];		
		var newX=oldX+Math.cos(playerDir)*playerVelY;
		var newY=oldY+Math.sin(playerDir)*playerVelY;

		if (!nearWall(newX, oldY)) {
			playerPos[0]=newX;
			oldX=newX;
			change=true;
		}
		if (!nearWall(oldX, newY)) {
			playerPos[1]=newY;
			change=true;
		}

		var currentTile = arena[parseInt(playerPos[0])][parseInt(playerPos[1])];
		if (currentTile === 23) {
			arena[parseInt(playerPos[0])][parseInt(playerPos[1])] = 0;
			collectedStars++;
			var starsHTML = "";
			for (var s = 1; s <= collectedStars; s++) {
				starsHTML += "<img src='star.png'>";
			}
			document.getElementById("starCounter").innerHTML = starsHTML;
		}
		
		if (currentTile === 24 && collectedStars === 5) {
			location.href = "https://miacono.wordpress.com/2013/04/11/capacitacin-gratuita-online/";
		}
	}
	
	if (change) drawCanvas();
}

function changeKey(which, to){
	switch (which){
		case 65:case 37: key[0]=to; break; // left
		case 87: case 38: key[2]=to; break; // up
		case 68: case 39: key[1]=to; break; // right
		case 83: case 40: key[3]=to; break;// down
		case 32: key[4]=to; break; // space bar;
		case 17: key[5]=to; break; // ctrl
	}
}
document.onkeydown=function(e){changeKey((e||window.event).keyCode, 1);}
document.onkeyup=function(e){changeKey((e||window.event).keyCode, 0);}

window.onload=function(){
	canvas=document.getElementById("canvas").getContext("2d");
	drawCanvas();
	setInterval(update, 35);
}